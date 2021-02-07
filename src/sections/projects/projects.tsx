/* eslint-disable max-lines-per-function */
import 'swiper/swiper.scss';

import css from './projects.module.sass';
import React from 'react';
import { Section } from '../../components/layout';
import { useStaticQuery, graphql } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard } from 'swiper';
import { ProjectsContext as ProjectsContextType } from './projects.type';
import { ProjectSlide } from './project-slide';
import { ProjectsContext } from './projects.context';
import { ProjectsNavigation } from './project-navigation/navigation';
import { ProjectsPagination } from './project-navigation/pagination';

SwiperCore.use([Keyboard]);

export type ProjectsSectionQuery = {
  projects: {
    id: string;
  } & ProjectsContextType;
};

export const projectsQuery = graphql`
  query ProjectsSectionQuery {
    projects: datoCmsProjectsSection {
      id
      title
      sectionLabel
      readMoreLabel
      closeButtonLabel
      challengesLabel
      checkSourceCodeLabel
      checkWebsiteLabel
      nextProjectLabel
      previousProjectLabel
      projectList {
        id
        websiteUrl
        technos
        sourceCodeUrl
        projectType
        excerptNode {
          childMarkdownRemark {
            html
          }
        }
        name
        missionDuration
        challenges
        contextNode {
          childMarkdownRemark {
            html
          }
        }
        mainImage {
          alt
          fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFluid
          }
        }
        screenshots {
          alt
          fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`;

export const Projects: React.FC = () => {
  const { projects } = useStaticQuery<ProjectsSectionQuery>(projectsQuery);
  const [swiperRef, setSwiperRef] = React.useState<SwiperCore>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const [isStart, setIsStart] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  const slideTo = React.useCallback((index) => swiperRef.slideTo(index), [swiperRef]);
  const slideNext = React.useCallback(() => swiperRef.slideNext(), [swiperRef]);
  const slidePrev = React.useCallback(() => swiperRef.slidePrev(), [swiperRef]);

  return (
    <ProjectsContext.Provider value={projects}>
      <Section className={css.projectsSection} isFullWidth id={projects.id}>
        <Section style={{ paddingBottom: 0 }}>
          <h2 className={css.title}>{projects.title}</h2>
          <ProjectsPagination
            currentSlideIndex={currentSlideIndex}
            projectList={projects.projectList}
            slideTo={slideTo}
          />
        </Section>
        <div className={css.swiperContainer}>
          <Swiper
            className={css.swiper}
            autoHeight
            speed={500}
            centeredSlides
            onReachBeginning={() => setIsStart(true)}
            onReachEnd={() => setIsEnd(true)}
            onFromEdge={() => {
              setIsStart(false);
              setIsEnd(false);
            }}
            onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
            onSwiper={setSwiperRef}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              500: {
                slidesPerView: 2
              },
              1000: {
                slidesPerView: 2,
                spaceBetween: 50,
                grabCursor: true,
                keyboard: {
                  enabled: true,
                  onlyInViewport: true
                }
              },
              1500: {
                slidesPerView: 3,
                spaceBetween: 50,
                grabCursor: true,
                keyboard: {
                  enabled: true,
                  onlyInViewport: true
                }
              }
            }}>
            {projects.projectList.map((project, index) => {
              const isCurrentSlide = currentSlideIndex === index;
              return (
                <SwiperSlide
                  key={project.id}
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: isCurrentSlide ? 'scale(1)' : 'scale(0.6)',
                    opacity: isCurrentSlide ? 1 : 0.6
                  }}>
                  <ProjectSlide projectIndex={index} closeButtonLabel={projects.closeButtonLabel} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <ProjectsNavigation
            isStart={isStart}
            isEnd={isEnd}
            slideNext={slideNext}
            slidePrev={slidePrev}
            previousProjectLabel={projects.previousProjectLabel}
            nextProjectLabel={projects.nextProjectLabel}
          />
        </div>
      </Section>
    </ProjectsContext.Provider>
  );
};

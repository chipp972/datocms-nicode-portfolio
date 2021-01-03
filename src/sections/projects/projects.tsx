import 'swiper/swiper.scss';
import 'swiper/components/a11y/a11y.scss';
import 'swiper/components/pagination/pagination.scss';

import css from './projects.module.sass';
import React from 'react';
import { Section } from '../../components/layout';
import { useStaticQuery, graphql } from 'gatsby';
import { Swiper } from 'swiper/react';
import SwiperCore, { A11y, Pagination } from 'swiper';
import { ProjectsContext as ProjectsContextType } from './projects.type';
import { ProjectSlide } from './project-slide';
import { ProjectsContext } from './projects.context';
import { ArrowIcon, ArrowDirection } from './arrow-icon';

SwiperCore.use([A11y, Pagination]);

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
  const paginationElRef = React.useRef<HTMLDivElement>(null);
  const [swiperRef, setSwiperRef] = React.useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const isMobile = swiperRef?.device.ios || swiperRef?.device.android;

  return (
    <ProjectsContext.Provider value={projects}>
      <Section isFullWidth id={projects.id}>
        <Section>
          <h2 className={css.title}>{projects.title}</h2>
        </Section>
        <Swiper
          className={css.swiper}
          slidesPerView="auto"
          speed={500}
          centeredSlides
          spaceBetween={50}
          grabCursor={!isMobile}
          onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
          onSwiper={setSwiperRef}
          pagination={{ clickable: true, el: paginationElRef.current }}>
          <div className="swiper-wrapper">
            {projects.projectList.map((project, index) => (
              <ProjectSlide
                key={project.id}
                projectIndex={index}
                isCurrentSlide={currentSlideIndex === index}
              />
            ))}
          </div>
          <div ref={paginationElRef} className={css.pagination}></div>
        </Swiper>
        <div className={css.navigationContainer}>
          <button className={css.navigation} onClick={() => swiperRef.slidePrev()}>
            <ArrowIcon size={50} direction={ArrowDirection.left} />
            {projects.previousProjectLabel}
          </button>
          <button className={css.navigation} onClick={() => swiperRef.slideNext()}>
            <ArrowIcon size={50} direction={ArrowDirection.right} />
            {projects.nextProjectLabel}
          </button>
        </div>
      </Section>
    </ProjectsContext.Provider>
  );
};

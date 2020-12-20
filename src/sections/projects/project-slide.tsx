import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Project } from './projects.type';
import Img from 'gatsby-image';
import { Tag } from '../../components/tag/tag';
import css from './projects.module.sass';
import buttonCss from '../../components/buttons/buttons.module.sass';

type Props = {
  readMoreLabel: string;
  isCurrentSlide: boolean;
};

export const ProjectSlide: React.FC<Project & Props> = ({
  name,
  excerptNode,
  mainImage,
  technos,
  readMoreLabel,
  isCurrentSlide
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <SwiperSlide
      className={css.project}
      style={{
        transition: 'transform 0.3s ease',
        transform: isCurrentSlide ? 'scale(1)' : 'scale(0.6)'
      }}>
      <div style={{ margin: 20 }}>
        <Img {...mainImage} />
        <h3 className={css.title}>{name}</h3>
        <p
          className={css.excerpt}
          dangerouslySetInnerHTML={{ __html: excerptNode.childMarkdownRemark.html }}
        />
        <ul className={css.technoList}>
          {technos
            .split(',')
            .filter((_, index) => index < 4)
            .map((techno, index) => (
              <li key={techno + index} className={css.technoItem}>
                <Tag>{techno}</Tag>
              </li>
            ))}
        </ul>
        <button onClick={() => setIsExpanded(true)} className={buttonCss.mediumButton}>
          {readMoreLabel}
        </button>
      </div>
    </SwiperSlide>
  );
};

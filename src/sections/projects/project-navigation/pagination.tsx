import React from 'react';
import css from './pagination.module.sass';
import { Project } from '../projects.type';

type Props = {
  projectList: Project[];
  slideTo: (index: number, speed?: number, runCallbacks?: boolean) => void;
  currentSlideIndex: number;
};

export const ProjectsPagination: React.FC<Props> = ({ projectList, slideTo, currentSlideIndex }) => (
  <div className={css.paginationContainer}>
    {projectList.map((_, index) => (
      <button
        key={`pagination-${index}`}
        title={`project ${index + 1}`}
        className={css.pagination}
        disabled={currentSlideIndex === index}
        onClick={() => slideTo(index, 100, true)}>
        {index + 1}
      </button>
    ))}
  </div>
);

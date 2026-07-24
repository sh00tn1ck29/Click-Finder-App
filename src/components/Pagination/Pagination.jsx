import React from 'react';
import { getPaginationRange } from './utils';
import './_pagination.scss';

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const total = Number(totalPages);
  const current = Number(currentPage);
  const pageRange = getPaginationRange(current, total);

  return (
    <div className="pagination stats__pagination">
      <button
        className="pagination__arrow"
        disabled={current === 1}
        onClick={() => onPageChange(current - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="28"
          viewBox="0 0 17 28"
          fill="none"
        >
          <path
            d="M14.8284 2L2.82843 14L14.8284 26"
            stroke={current === 1 ? '#F1F1F1' : '#3A80BA'}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {pageRange.map((page, index) => {
        if (page === '...') {
          return (
            <button key={`dots-${index}`} className="pagination__button" disabled>
              ...
            </button>
          );
        }

        const pageNumber = Number(page);
        const isActive = pageNumber === current;

        return (
          <button
            key={pageNumber}
            className={`pagination__button ${isActive ? 'pagination__button--active' : ''}`}
            onClick={() => current !== pageNumber && onPageChange(pageNumber)}
          >
            {page}
          </button>
        );
      })}

      <button
        className="pagination__arrow"
        disabled={current === total}
        onClick={() => onPageChange(current + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="28"
          viewBox="0 0 17 28"
          fill="none"
        >
          <path
            d="M2 2L14 14L2 26"
            stroke={current === total ? '#F1F1F1' : '#3A80BA'}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

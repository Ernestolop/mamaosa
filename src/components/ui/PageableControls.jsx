import Link from 'next/link';
import styles from "./Ui.module.css";

export const PageableControls = ({ pageable }) => {
  const { currentPage, totalPages } = pageable;
  const baseUrl = process.env.BASE_URL;
  const siblingsCount = 1;

  const generatePageNumbers = () => {
    const pages = [];

    if (totalPages <= 5 + siblingsCount * 2) {
      for (let i = 0; i < totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(currentPage - siblingsCount, 0);
      const endPage = Math.min(currentPage + siblingsCount, totalPages - 1);

      if (startPage > 0) pages.push(0);
      if (startPage > 1) pages.push('...');

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages - 2) pages.push('...');
      if (endPage < totalPages - 1) pages.push(totalPages - 1);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className={styles.pagination__container}>
      {currentPage > 0 &&
        <button className={styles.pagination__btn}>
          <Link className={styles.pagination__link} href={`${baseUrl}/productos?page=${currentPage - 1}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.pagination__svg}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
          </Link>
        </button>
      }
      <div className={styles.pagination__pages}>
        {pageNumbers.map((page, index) => (
          <div key={index}>
            {page === '...' ? (
              <span className={styles.pagination__ellipsis}>...</span>
            ) : (
              <button className={styles.pagination__btn + (currentPage === page ? ` ${styles.pagination__current}` : '')} disabled={currentPage === page}>
                {
                  currentPage === page ? (
                    <span className={styles.pagination__link}>{page + 1}</span>
                  ) : (
                    <Link className={styles.pagination__link} href={`${baseUrl}/productos?page=${page}`}><span>{page + 1}</span></Link>
                  )
                }
              </button>

            )}
          </div>
        ))}
      </div>
      {currentPage < totalPages - 1 &&
        <button className={styles.pagination__btn}>
          <Link className={styles.pagination__link} href={`${baseUrl}/productos?page=${currentPage + 1}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.pagination__svg}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
            </svg>
          </Link>
        </button>
      }
    </div>
  );
};

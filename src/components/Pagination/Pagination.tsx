import { IPaginationProps } from "../../interfaces";
import styles from "./Pagination.module.css";

const Pagination = ({totalPages, handleNextPage, handlePreviousPage, handlePageClick, currentPage}: IPaginationProps) => {
    return (
        <div className={styles.pagination}>
            <button disabled={currentPage <= 1} onClick={handlePreviousPage} className={styles.arrow}>{`<`}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) => {
                    return <button key={index} onClick={() => handlePageClick(index + 1)} className={styles.pageNumber} disabled={currentPage === index + 1}>{index + 1}</button>
                })}
            </div>
            <button disabled={currentPage >= totalPages} onClick={handleNextPage} className={styles.arrow}>{`>`}</button>
        </div>
    )
}

export default Pagination;
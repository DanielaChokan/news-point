import { useGetNewsQuery } from "../../store/services/newsApi";
import { TOTAL_PAGES } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import styles from "./NewsByFilters.module.css";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

const NewsByFilters = () => {

    const dispatch = useAppDispatch();

    const filters = useAppSelector(state => state.news.filters);
    const news = useAppSelector(state => state.news.news);

    const debouncedKeywords = useDebounce(filters.keywords as string, 1500);

    const { isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debouncedKeywords
    })

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            dispatch(setFilters({key: 'page_number', value: filters.page_number + 1}));
        }
    }

    const handlePreviousPage = () => {
        if (filters.page_number > 1) {
            dispatch(setFilters({key: 'page_number', value: filters.page_number - 1}));
        }
    }

    const handlePageClick = (pageNumber: number) => {
        dispatch(setFilters({key: 'page_number', value: pageNumber}));
    }

    return (
        <section className={styles.section}>
            <NewsFilters
                filters={filters} />

            <PaginationWrapper top bottom
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number} >
                <NewsList
                    isLoading={isLoading}
                    news={news} />
            </PaginationWrapper>

        </section>
    )
}

export default NewsByFilters;
import { useAppDispatch, useAppSelector } from "@/app/appStore";
import styles from "./styles.module.css";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import PaginationWrapper from "@/features/pagination/ui/Pagination/Pagination";
import { setFilters } from "@/entities/news/model/newsSlice";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsListWithSkeleton from "@/widgets/news/ui/NewsList/NewsList";

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
                <NewsListWithSkeleton
                    isLoading={isLoading}
                    news={news} />
            </PaginationWrapper>

        </section>
    )
}

export default NewsByFilters;
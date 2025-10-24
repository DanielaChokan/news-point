import { useTheme } from "../../context/ThemeContext";
import { IFilters } from "../../interfaces/index";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./NewsFilters.module.css";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { useAppDispatch } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

interface Props {
    filters: IFilters;}

const NewsFilters = ({ filters }: Props) => {
    const { isDark } = useTheme();
    const { data } = useGetCategoriesQuery(null);

    const dispatch = useAppDispatch();

    return (
        <div className={styles.filters}>
            {data ? (
                <Slider isDark={isDark}>
                    <Categories
                        categories={data.categories}
                        setSelectedCategory={(category) => 
                            dispatch(setFilters({ key: 'category', value: category }))}
                        selectedCategory={filters.category} />
                </Slider>
            ) : null}

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => dispatch(setFilters({ key: 'keywords', value: keywords }))} />
        </div>
    )
}

export default NewsFilters;
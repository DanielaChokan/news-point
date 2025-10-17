import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import styles from "./NewsFilters.module.css";

const NewsFilters = ({ filters, changeFilter }) => {
    const { data: dataCategories } = useFetch(getCategories);

    return (
        <div className={styles.filters}>
            {dataCategories ? <Categories
                categories={dataCategories.categories}
                setSelectedCategory={(category) => changeFilter('category', category)}
                selectedCategory={filters.category} /> : null}

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilter('keywords', keywords)} />
        </div>
    )
}

export default NewsFilters;
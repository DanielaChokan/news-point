import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import { CategoriesApiResponse, IFilters } from "../../interfaces/index";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./NewsFilters.module.css";

interface Props {
    filters: IFilters;
    changeFilter: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
    const { data: dataCategories } = useFetch<null, CategoriesApiResponse>(getCategories);

    return (
        <div className={styles.filters}>
            {dataCategories ? (
                <Slider>
                    <Categories
                        categories={dataCategories.categories}
                        setSelectedCategory={(category) => changeFilter('category', category)}
                        selectedCategory={filters.category} />
                </Slider>
            ) : null}

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilter('keywords', keywords)} />
        </div>
    )
}

export default NewsFilters;
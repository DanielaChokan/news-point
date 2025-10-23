import { ForwardedRef, forwardRef } from "react";
import styles from "./Categories.module.css";
import { CategoriesType } from "../../interfaces/index";

interface Props {
    categories: CategoriesType[];
    setSelectedCategory: (category: CategoriesType | null) => void;
    selectedCategory: CategoriesType | null;
}

const Categories = forwardRef(({ categories, setSelectedCategory, selectedCategory }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className={styles.categories}>
            <button
                className={!selectedCategory ? styles.active : styles.item}
                onClick={() => setSelectedCategory(null)}>
                All
            </button>
            {categories.map(category => (
                <button
                    key={category}
                    className={
                        selectedCategory === category ? styles.active : styles.item
                    }
                    onClick={() => setSelectedCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    )
})

Categories.displayName = "Categories";

export default Categories;
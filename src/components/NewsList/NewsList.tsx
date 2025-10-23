import styles from "./NewsList.module.css";
import NewsItem from "../NewsItem/NewsItem";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces";

interface Props {
    news?: INews[];
}

const NewsList = ({news}: Props) => {
    if (!news || news.length === 0) {
        return <p>No news available</p>;
    }
    return (
        <ul className={styles.list}>
            {news?.map(item => {
                return <NewsItem key={item.id} item={item} />;
            })}
        </ul>
    )
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10);

export default NewsListWithSkeleton;
import { INews, NewsItem } from "@/entities/news";
import styles from "./styles.module.css";
import withSkeleton from "@/shared/hocs/withSkeleton";

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
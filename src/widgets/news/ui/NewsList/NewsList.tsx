import { INews } from "@/entities/news";
import styles from "./styles.module.css";
import withSkeleton from "@/shared/hocs/withSkeleton";
import NewsCard from "@/entities/news/ui/NewsCard/NewsCard";

interface Props {
    news?: INews[];
    type?: 'banner' | 'item';
    direction?: 'row' | 'column';
}

const NewsList = ({news, type = 'item'}: Props) => {
    if (!news || news.length === 0) {
        return <p>No news available</p>;
    }
    return (
        <ul className={`${type === 'item' ? styles.items : styles.banners}`}>
            {news?.map(item => {
                return <NewsCard key={item.id} item={item} type={type}/>;
            })}
        </ul>
    )
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
import BannersList from "../BannersList/BannersList";
import styles from "./LatestNews.module.css";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";

const LatestNews = () => {
    //const { data, isLoading } = useFetch<null, NewsApiResponse>(getLatestNews);

    const { data, isLoading } = useGetLatestNewsQuery(null);

    return (
        <section className={styles.section}>
            <BannersList banners={data && data.news} isLoading={isLoading} />
        </section>
    )
}

export default LatestNews;
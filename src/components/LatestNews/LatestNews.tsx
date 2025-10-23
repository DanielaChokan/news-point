import { getLatestNews } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import BannersList from "../BannersList/BannersList";
import { NewsApiResponse } from "../../interfaces";
import styles from "./LatestNews.module.css";

const LatestNews = () => {
    const { data, isLoading } = useFetch<null, NewsApiResponse>(getLatestNews);

    return (
        <section className={styles.section}>
            <BannersList banners={data && data.news} isLoading={isLoading} />
        </section>
    )
}

export default LatestNews;
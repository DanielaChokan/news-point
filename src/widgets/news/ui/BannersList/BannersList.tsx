import { INews, NewsBanner } from "@/entities/news";
import styles from "./styles.module.css";
import withSkeleton from "@/shared/hocs/withSkeleton";

interface Props {
    banners?: INews[] | null;
}

const BannersList = ({banners}: Props) => {
    return (
        <ul className={styles.banners}>
            {banners?.map(banner => {
                return (
                    <NewsBanner key={banner.id} item={banner} />
                )
            })}
        </ul>
    )
}

const BannersListWithSkeleton = withSkeleton<Props>(BannersList, 'banner', 10, 'row');

export default BannersListWithSkeleton;
import styles from "./BannersList.module.css";
import NewsBanner from "../NewsBanner/NewsBanner";
import withSkeleton from "../../helpers/hocs/withSkeleton";
const BannersList = ({banners}) => {
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

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row');

export default BannersListWithSkeleton;
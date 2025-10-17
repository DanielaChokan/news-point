import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Image from "../Image/Image";
import styles from "./NewsBanner.module.css";

const NewsBanner = ({item}) => {
    return (
        <div className={styles.banner}>
            <Image image={item?.image} />
            <h3 className={styles.title}>{item?.title || "No title"}</h3>
            <p className={styles.extra}>{item?.published ? formatTimeAgo(item.published) : ""} by {item?.author || "Unknown"}</p>
        </div>
    )
}

export default NewsBanner;
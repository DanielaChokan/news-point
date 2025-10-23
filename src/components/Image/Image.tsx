import styles from "./Image.module.css";

interface Props {
    image: string;
}

const Image = ({image}: Props) => {
    return (
        <div className={styles.wrapper}>
            {image ? <img className={styles.image} src={image} alt="news" /> : null}
        </div>
    )
}

export default Image;
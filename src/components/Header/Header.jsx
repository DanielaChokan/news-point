import { formatDate } from "../../helpers/formatDate";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>NEWS POINT</h1>
            <p className={styles.date}>{formatDate(new Date())}</p>
        </header>
    )
}

export default Header;
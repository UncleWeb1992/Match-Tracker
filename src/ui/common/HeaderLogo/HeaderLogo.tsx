import { FC } from "react";
import styles from "./headerLogo.module.css";

const HeaderLogo: FC = () => {
  return <span className={styles.logo}>Match Tracker</span>;
};

export default HeaderLogo;

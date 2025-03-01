import { FC, useEffect, useState } from "react";
import styles from "./appLoader.module.css";
import Icon from "../../../icons/command.png";

const ANIMATION_TIME_DURATION = 4000;

const AppLoader: FC = () => {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    setTimeout(setClosed.bind(null, true), ANIMATION_TIME_DURATION);
  }, []);
  return (
    <div className={`${styles.app_loader} ${closed && styles.hide}`}>
      <div className={styles.left}>
        <img src={Icon} alt="player icon" />
      </div>
      <div className={styles.right}>
        <img src={Icon} alt="player icon" />
      </div>
    </div>
  );
};

export default AppLoader;

import { FC } from "react";
import NoDataIcon from "../../../icons/nodata.png";
import styles from "./noData.module.css";

const NoData: FC = () => {
  return (
    <div className={styles.root}>
      <img src={NoDataIcon} alt="no data icon" />
    </div>
  );
};

export default NoData;

import { FC } from "react";
import styles from "./status.module.css";
import { MatchStatus } from "../../../types/types.ts";

interface StatusProps {
  label: string;
  color: MatchStatus;
}

const colorClasses: Record<MatchStatus, string> = {
  [MatchStatus.Scheduled]: "danger",
  [MatchStatus.Finished]: "success",
  [MatchStatus.Ongoing]: "warning",
};

const Status: FC<StatusProps> = ({ color, label }) => {
  return (
    <div className={`${styles.status} ${styles[colorClasses[color]]}`}>
      {label}
    </div>
  );
};

export default Status;

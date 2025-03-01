import { IMatch } from "../../../types/types.ts";
import { FC } from "react";
import styles from "./matchList.module.css";
import MatchItem from "../MatchItem/MatchItem.tsx";

interface MatchListProps {
  list: IMatch[];
}

const MatchList: FC<MatchListProps> = ({ list }) => {
  return (
    <ul className={styles.matchList}>
      {list.map((item) => (
        <li key={item.title}>
          <MatchItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default MatchList;

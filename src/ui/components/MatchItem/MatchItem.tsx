import { IMatch } from "../../../types/types.ts";
import { FC, useState } from "react";
import { Card, Status } from "../../common";
import MatchInfo from "../MatchInfo/MatchInfo.tsx";
import CommandIcon from "../../../icons/command.png";
import ArrowIcon from "../../../icons/arrow.svg";
import styles from "./matchItem.module.css";

interface MatchItemProps {
  item: IMatch;
}

const MatchItem: FC<MatchItemProps> = ({ item }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Card classes={styles.item}>
      <div className={styles.wrapper}>
        <div className={styles.command}>
          <img
            className={styles.command_icon}
            src={CommandIcon}
            alt="command icon"
          />
          <span>{item.awayTeam.name}</span>
        </div>

        <div className={styles.score_block}>
          <div className={styles.score}>
            {item.awayScore} : {item.homeScore}
          </div>
          <Status label={item.status} color={item.status} />
        </div>

        <div className={styles.command}>
          <span>{item.homeTeam.name}</span>
          <img
            className={styles.command_icon}
            src={CommandIcon}
            alt="command icon"
          />
          <img
            onClick={toggleOpen}
            className={`${styles.arrow_icon} ${open && styles.open}`}
            src={ArrowIcon}
            alt="arrow icon"
          />
        </div>
      </div>
      {open && (
        <div className={styles.match_info}>
          <MatchInfo team={item.awayTeam} />
          <MatchInfo team={item.homeTeam} />
        </div>
      )}
    </Card>
  );
};

export default MatchItem;

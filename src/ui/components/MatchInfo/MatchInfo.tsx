import { ITeam } from "../../../types/types.ts";
import { FC } from "react";
import { Card } from "../../common";
import PlayerIcon from "../../../icons/user.png";
import styles from "./matchInfo.module.css";

interface MatchInfoProps {
  team: ITeam;
}

const MatchInfo: FC<MatchInfoProps> = ({ team }) => {
  return (
    <ul className={styles.list}>
      {team.players.map(({ username, kills }, i) => (
        <li className={styles.item} key={i.toString()}>
          <Card classes={styles.user_card}>
            <div>
              <img
                className={styles.player_icon}
                src={PlayerIcon}
                alt="player icon"
              />
              <span className={styles.user_title}>{username}</span>
            </div>

            <div>
              <span className={styles.label}>Убийств:</span>
              <span className={styles.user_title}>{kills}</span>
            </div>
          </Card>
        </li>
      ))}
      <li className={styles.item}>
        <Card classes={styles.info_card}>
          <div>
            <span className={styles.label}>Points:</span>
            <span>{team.points}</span>
          </div>

          <div>
            <span className={styles.label}>Место:</span>
            <span>{team.place}</span>
          </div>

          <div>
            <span className={styles.label}>Всего убийств:</span>
            <span>{team.total_kills}</span>
          </div>
        </Card>
      </li>
    </ul>
  );
};

export default MatchInfo;

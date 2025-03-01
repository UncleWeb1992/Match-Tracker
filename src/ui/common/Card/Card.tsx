import { FC, PropsWithChildren } from "react";
import styles from "./card.module.css";

interface CardProps extends PropsWithChildren {
  classes?: string;
}

const Card: FC<CardProps> = ({ classes, children }) => {
  return <div className={`${styles.card} ${classes}`}>{children}</div>;
};
export default Card;

import { FC } from "react";
import { Button, Card, HeaderLogo } from "../../common";
import ErrorIcon from "../../../icons/error.svg";
import styles from "./header.module.css";

interface HeaderProps {
  isLoading: boolean;
  errorMessage: string;
  reload: () => void;
}

const Header: FC<HeaderProps> = ({ isLoading, errorMessage, reload }) => {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <div className={styles.left}>
        {errorMessage && (
          <Card classes={styles.errorCard}>
            {" "}
            <img
              className={styles.errorIcon}
              src={ErrorIcon}
              alt="loading error icon"
            />{" "}
            <span className={styles.errorText}>
              Ошибка: не удалось загрузить информацию
            </span>
          </Card>
        )}
        <Button label="Обновить" isLoading={isLoading} onClick={reload} />
      </div>
    </header>
  );
};

export default Header;

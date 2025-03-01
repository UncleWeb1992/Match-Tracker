import { FC, ButtonHTMLAttributes } from "react";
import RefreshIcon from "../../../icons/Refresh.svg";
import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isLoading?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ label, isLoading, onClick, ...rest }) => {
  return (
    <button {...rest} className={styles.btn} onClick={onClick}>
      <span className={styles.label}>{label}</span>
      {isLoading && !rest.disabled && (
        <img
          className={styles.loading}
          src={RefreshIcon}
          alt="Button loading icon"
        />
      )}
    </button>
  );
};

export default Button;

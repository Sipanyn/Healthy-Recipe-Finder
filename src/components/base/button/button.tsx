import type React from "react";
import styles from "./button.module.css";
type ButtonProps = {
  variant: "text" | "contained" | "full_width";
} & React.PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  if (variant === "text") {
    return <button className={`${styles.text}`}>{props.children}</button>;
  }
  if (variant === "contained") {
    return (
      <button {...props} className={`${styles.contained}`}>
        {props.children}
      </button>
    );
  }
  if (variant === "full_width") {
    return (
      <button {...props} className={`${styles.full_width}`}>
        {props.children}
      </button>
    );
  }
};

export default Button;

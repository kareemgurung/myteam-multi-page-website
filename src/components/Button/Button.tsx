import styles from "./button.module.scss";

type ButtonProps = {
  name: string;
  onClick?: () => void;
  color: "light" | "dark" | "secondary";
  typeOfButton: "button" | "submit";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  name,
  onClick,
  color,
  typeOfButton,
  disabled,
}) => {
  let style = `${styles.container} `;
  if (color === "dark") {
    style += `${styles.dark}`;
  } else if (color === "secondary") {
    style += `${styles.secondary}`;
  } else {
    style += `${styles.light}`;
  }
  return (
    <button
      type={typeOfButton}
      aria-label={name}
      onClick={onClick}
      className={style}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Button;

import styles from "./button.module.scss";

type ButtonProps = {
  name: string;
  onClick: () => void;
  color: "light" | "dark" | "secondary";
};

const Button: React.FC<ButtonProps> = ({ name, onClick, color }) => {
  let style = `${styles.container} `;
  if (color === "dark") {
    style += `${styles.dark}`;
  } else if (color === "secondary") {
    style += `${styles.secondary}`;
  } else {
    style += `${styles.light}`;
  }
  return (
    <button type="button" aria-label={name} onClick={onClick} className={style} disabled={false}>
      {name}
    </button>
  );
};

export default Button;

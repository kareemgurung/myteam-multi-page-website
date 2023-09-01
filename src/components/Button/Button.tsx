import styles from './button.module.scss';

type ButtonProps = {
    name: string;
    onClick: ()=> void;
    color: string;
}

const Button: React.FC<ButtonProps> = ({name, onClick, color}) => {
    return <button type="button" aria-label={name} onClick={onClick} className={styles.container}>
        {name}
    </button>
}

export default Button
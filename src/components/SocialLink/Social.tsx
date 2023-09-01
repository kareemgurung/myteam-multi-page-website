import { Link } from "react-router-dom";
import styles from "./social.module.scss";

type SocialProps = {
  name: string;
  image: string;
};

const Social: React.FC<SocialProps> = ({ name, image }) => {
  return (
    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className={styles.container}>
      <img src={image} alt={`${name} logo`} />
    </Link>
  );
};

export default Social;

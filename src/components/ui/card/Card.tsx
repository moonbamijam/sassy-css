import { CSSProperties } from "react";
import styles from "./card.module.scss";

type CardProps = {
  content?: React.ReactNode;
  details?: string;
  style?: CSSProperties | undefined;
};

const Card = ({ content, details, style }: CardProps) => {
  return (
    <div style={style} className={`${styles.card}`}>
      {content}
      <p className="">{details}</p>
    </div>
  );
};

export default Card;

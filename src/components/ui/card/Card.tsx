import styles from "./card.module.scss";

type CardProps = {
  content: React.ReactNode;
  details: string;
};

const Card = ({ content, details }: CardProps) => {
  return (
    <div className={`${styles.card}`}>
      {content}
      <p className="">{details}</p>
    </div>
  );
};

export default Card;

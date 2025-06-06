import styles from "./errorCard.module.css";

type ErrorCardProps = { message: string };

const ErrorCard = ({ message }: ErrorCardProps) => {
  return (
    <div className={styles.errorCard}>
      <h2>Error</h2>
      {message}
    </div>
  );
};

export default ErrorCard;

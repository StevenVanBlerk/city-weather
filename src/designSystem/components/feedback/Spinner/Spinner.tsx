import styles from "./spinner.module.css";

const Spinner = ({ size }: { size: number }) => {
  const spinnerWidth = `${size * 0.08}px`;
  const canvasWidth = `${size}px`;
  return (
    <div
      className={styles.spinner}
      style={{
        width: canvasWidth,
        height: canvasWidth,
        border: `${spinnerWidth} solid #f3f3f3`,
        borderTop: `${spinnerWidth} solid #3498db`,
      }}
    />
  );
};

export default Spinner;

import styles from "./Bird.module.css";

export default function Bird() {
  return (
    <div className={`${styles.frendWrapper} relative overflow-hidden`}>
      <div className={`${styles.frend} absolute`}></div>
    </div>
  );
}

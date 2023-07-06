import styles from "./ParallaxBackground.module.css"

export default function ParallaxBackground() {
  return (
      <div className={`overflow-hidden relative w-screen h-screen bg-amber-700`}>
        <div className={`${styles.mars} ${styles.mountain} absolute`}></div>
        <div className={`${styles.mars} ${styles.far} absolute`}></div>
        <div className={`${styles.mars} ${styles.mid} absolute`}></div>
        <div className={`${styles.mars} ${styles.close} absolute`}></div>
      </div>
  );
}

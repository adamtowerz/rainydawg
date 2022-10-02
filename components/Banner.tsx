import styles from "./Banner.module.scss";

function Banner() {
  console.log(styles);
  return (
    <div className={styles.banner}>
      <h2>Announcement</h2>
      <p>DJ Applications are CLOSED!</p>
    </div>
  );
}

export default Banner;

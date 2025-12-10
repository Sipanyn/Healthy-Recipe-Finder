import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.content}>Made with ❤️ and 🥑</div>
      <div className={styles.social_media}>
        <svg className={styles.instagram_icon}>
          <use href="sprite.svg#instagram_icon"></use>
        </svg>
        <svg className={styles.twitter_icon}>
          <use href="sprite.svg#twitter_icon"></use>
        </svg>
        <svg className={styles.tiktok_icon}>
          <use href="sprite.svg#tiktok_icon"></use>
        </svg>
      </div>
    </div>
  );
};

export default Footer;

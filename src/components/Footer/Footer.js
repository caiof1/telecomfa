import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.redes}>
        <a href="https://www.facebook.com/profile.php?id=100095501705331" target="_blank">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/telecomfa/" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
      <div className={styles.dev}>
        <span>Desenvolvido por Yuma Tech</span>
      </div>
    </div>
  );
};

export default Footer;

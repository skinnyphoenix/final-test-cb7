import styles from "./Footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className={styles.Wrapper__Footer}>
        <Image className={styles.Footer__Image} src={"/images/banner.jpeg"} width={1920} height={1080} />
        <div className={styles.Wrapper__Text}>
          <h3>+20 Destinazioni</h3>
          <h3>+15 Imbarcazioni</h3>
          <h3>+40 Itinerari</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;

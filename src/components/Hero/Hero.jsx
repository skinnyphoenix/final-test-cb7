import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className={styles.Main__Wrapper}>
        <div className={styles.Wrapper__Hero}>
          <Image className={styles.Hero__Image} src={"/images/hero.jpeg"} width={1920} height={1080} alt="Hero Image" />
        </div>
        <div className={styles.Wrapper__Text}>
          <h3>Lorem Ipsum dolor sit amet</h3>
        </div>
      </div>
    </>
  );
};

export default Hero;

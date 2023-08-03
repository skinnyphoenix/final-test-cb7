import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return <div className={styles.Navbar__Wrapper}>{<Image src={"/images/logo.svg"} width={50} height={50} alt="Logo" />}</div>;
};

export default Navbar;

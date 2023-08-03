import styles from "./PortFilter.module.scss";

const PortFilter = () => {
  return (
    <div className={styles.Wrapper__Filter}>
      <label htmlFor="">Seleziona il porto di partenza: </label>
      <select name="" id="">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </div>
  );
};

export default PortFilter;

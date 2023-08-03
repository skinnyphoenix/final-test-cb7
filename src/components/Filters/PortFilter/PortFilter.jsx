import styles from "./PortFilter.module.scss";

const PortFilter = () => {
  return (
    <div className={styles.Wrapper__Filter}>
      <select name="" id="">
        <option value="">Seleziona il porto di partenza: </option>
        <option value="">Mostra tutti</option>
        <option value="">Mostra per luogo di partenza</option>
      </select>
    </div>
  );
};

export default PortFilter;

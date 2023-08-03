import styles from "./Card.module.scss";
import infos from "../../../public/data.json";
import Image from "next/image";

import { useState } from "react";

const Card = () => {
  const [visible, setVisible] = useState(8);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 8);
  };

  return (
    <>
      <div className={styles.Wrapper__Card}>
        <div className={styles.Card__Info}>
          {infos.slice(0, visible).map((info) => (
            <div className={styles.Single__Card} key={info.id}>
              <div className={styles.Main__Infos}>
                <h4>{info.budget.value + "€"} per cabina</h4>
                <h3>{info.title}</h3>
              </div>

              <div className={styles.Wrapper__Trip}>
                <div className={styles.Info__Departure}>
                  <h5 className={styles.BoldCard2}>
                    <h5 className={styles.blueText}>PARTENZA DA</h5>
                  </h5>
                  <h5 className={styles.BoldCard}>{info.departure.Port}</h5>
                  <br />
                  <h5>{info.departureDate}</h5>
                  <br />
                  <h5>
                    {info.reservations} {info.reservationsType}
                  </h5>
                  <h5>Disponibilità: {info.reservationsAvailable}</h5>
                </div>
                <Image className={styles.ArrowSvg} src={"/icons/right-arrow-alt.svg"} width={30} height={30} />
                <div className={styles.Arrival__Infos}>
                  <h5>{info.boatType}</h5>
                  <h5>{info.numberOfDays} Giorni</h5>
                  <br />
                  <h5>{info.arrivalDate}</h5>
                </div>
              </div>

              <button>
                <h5>PRENOTA</h5>
              </button>
            </div>
          ))}
        </div>
        <button className={styles.showMoreButton} onClick={showMoreItems}>
          Mostra altro
        </button>
      </div>
    </>
  );
};

export default Card;

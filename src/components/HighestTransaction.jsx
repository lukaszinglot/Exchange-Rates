import React from "react";
import "./highestTransaction.css";

const HighestTransaction = ({ props, onChange, value }) => {
  return (
    <div className="big-top">
      <div className="float-left">Największa transakcja</div>
      <div className="biggest-value">
        {props.length
          ? Math.max.apply(
              Math,
              props.map(function(o) {
                return o.value;
              })
            )
          : 0}
        Euro
      </div>
      <div className="highest-input">
        <label>
          Zmień kurs Euro:
          <input type="number" step="0.01" onChange={onChange} value={value} />
        </label>
      </div>
      <div className="opis">
        Opis działania: Duży przycisk "+" na środku ekranu dodaje transakcję.
        Input "Zmień kurs euro", ustawia customową wartość euro (1EUR = xPLN).
        Klikanie w dodane transakcje powoduje ich usunięcie!
      </div>
    </div>
  );
};

export default HighestTransaction;

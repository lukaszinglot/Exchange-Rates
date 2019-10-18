import React from "react";
import HighestTransaction from "./HighestTransaction";
import ActualCurrency from "./ActualCurrency";

const TransactionsList = ({ list, click, currency, rate, onChange }) => {
  let total = 0;
  return (
    <div className="flex-pasek">
      <div className="list-top">
        <div className="item">
          <div className="content-list-top">
            <div className="header-list-top">Poprzednie transakcje:</div>
          </div>

          {list.lenght !== 0
            ? list.map(({ id, name, value }) => (
                <div key={value} className="ui middle aligned animated list">
                  <div className="item" onClick={() => click(id)}>
                    <div className="content-list">
                      <p className="header-list">{name}</p>
                      <p className="header-value">
                        Wartość w EUR: {(" ", value)}
                      </p>
                      <p className="header-rate">
                        Wartość w PLN:{" "}
                        {rate
                          ? (total += Math.round(value * rate * 100) / 100) &&
                            Math.round(value * rate * 100) / 100
                          : (total +=
                              Math.round(value * currency.PLN * 100) / 100) &&
                            Math.round(value * currency.PLN * 100) / 100}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : null}
          <div className="content-bottom">
            <p className="header-bottom">
              Suma wydatków: {Math.round(total * 100) / 100}
            </p>
          </div>
        </div>
      </div>
      <HighestTransaction props={list} onChange={onChange} value={rate} />
      <ActualCurrency currency={currency} />
    </div>
  );
};

export default TransactionsList;

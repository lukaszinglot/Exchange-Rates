import React from "react";
import HighestTransaction from "./HighestTransaction";
import ActualCurrency from "./ActualCurrency";

const TransactionsList = props => {
  let total = 0;
  return (
    <div className="flex-pasek">
      <div className="list-top">
        <div className="item">
          <div className="content-list-top">
            <div className="header-list-top">Poprzednie transakcje:</div>
          </div>

          {props.list.lenght !== 0
            ? props.list.map(element => (
                <div
                  key={element.value}
                  className="ui middle aligned animated list"
                >
                  <div className="item" onClick={() => props.click(element.id)}>
                    <div className="content-list">
                      <p className="header-list">{element.name}</p>
                      <p className="header-value">
                        Wartość w EUR: {(" ", element.value)}
                      </p>
                      <p className="header-rate">
                        Wartość w PLN:{" "}
                        {props.rate
                          ? (total +=
                              Math.round(element.value * props.rate * 100) /
                              100) &&
                            Math.round(element.value * props.rate * 100) / 100
                          : (total +=
                              Math.round(
                                element.value * props.currency.PLN * 100
                              ) / 100) &&
                            Math.round(
                              element.value * props.currency.PLN * 100
                            ) / 100}
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
      <HighestTransaction
        props={props.list}
        onChange={props.onChange}
        value={props.value}
      />
      <ActualCurrency currency={props.currency} />
    </div>
  );
};

export default TransactionsList;

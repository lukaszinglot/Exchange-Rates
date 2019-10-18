import React from "react";

const ActualCurrency = props => {
  return (
    <div className="currency-top">
      <div className="actual-currency">Aktualne Kursy</div>
      {Object.entries(props.currency).map(([key, value]) => {
        return (
          <div key={key} className="ui animated list">
            <div className="item">
              <div className="content-list current">
                {key} : {value.toString()}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActualCurrency;

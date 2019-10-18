import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCurrency,
  addExchangeCreator,
  defineEuroRate,
  deleteExchangeCreator
} from "../store/actions";
import ModalCommon from "./ModalCommon";
import TransactionsList from "./TransactionsList";
import Footer from "./Footer";

import "./currencyModule.css";

class CurrencyModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      inputTextValue: "",
      inputNumberValue: 0
    };

    this.formHandler = this.formHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.defineRate = this.defineRate.bind(this);
  }
  componentDidMount() {
    this.props.getCurrency();
  }

  show = () => this.setState({ open: true });
  close = () =>
    this.setState({ open: false, inputTextValue: "", inputNumberValue: 0 });

  handleInputChange(e) {
    this.setState({
      inputTextValue: e.target.value
    });
  }

  handleNumberChange(e) {
    this.setState({
      inputNumberValue: e.target.value
    });
  }

  formHandler(e) {
    const { inputTextValue, inputNumberValue } = this.state;
    e.preventDefault();
    let numberOfExchanges = this.props.exchanged.length + 1;

    this.props.addExchangeCreator(
      numberOfExchanges,
      inputTextValue,
      inputNumberValue
    );

    this.setState({
      open: false,
      inputTextValue: "",
      inputNumberValue: 0
    });
  }

  defineRate(e) {
    e.preventDefault();
    this.props.defineEuroRate(e.target.value);
  }

  render() {
    const { open, inputTextValue, inputNumberValue } = this.state;
    const { currency, exchanged, rate, deleteExchangeCreator } = this.props;
    return (
      <div>
        <div className="yellow"></div>
        {currency.rates ? (
          <TransactionsList
            list={exchanged}
            rate={rate}
            currency={currency.rates}
            click={deleteExchangeCreator}
            onChange={this.defineRate}
          />
        ) : null}
        <div>
          <ModalCommon
            open={open}
            onClose={this.close}
            onClick={this.show}
            onSubmit={this.formHandler}
            inputTextValue={inputTextValue}
            inputNumberValue={inputNumberValue}
            onInputChange={this.handleInputChange}
            onNumberChange={this.handleNumberChange}
            text="Dodaj transakcję"
          />
        </div>
        <Footer date={currency.date} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currency: state.postsReducer.currency,
    exchanged: state.postsReducer.exchange,
    rate: state.postsReducer.rate
  };
};

export default connect(
  mapStateToProps,
  {
    getCurrency,
    addExchangeCreator,
    defineEuroRate,
    deleteExchangeCreator
  }
)(CurrencyModule);

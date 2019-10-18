import jsonPlaceholder from "../../api/jsonPlaceholder";
import {
  FETCH_CURRENCY,
  ADD_EXCHANGE,
  DEFINE_RATE,
  DELETE_EXCHANGE
} from "./actionTypes";

export function fetchCurrency(data) {
  return {
    type: FETCH_CURRENCY,
    data
  };
}

export function addRate(data) {
  return {
    type: DEFINE_RATE,
    data
  };
}

export const addExchange = data => {
  return {
    type: ADD_EXCHANGE,
    data
  };
};

export const deleteExchange = data => ({
  type: DELETE_EXCHANGE,
  data
});

export const getCurrency = () => dispatch => {
  jsonPlaceholder
    .get("/latest?base=EUR")
    .then(({ data }) => {
      dispatch(fetchCurrency(data));
    })
    .catch(err => {
      console.log(err);
    });
};

export const addExchangeCreator = (id, name, value) => dispatch => {
  const newPost = {
    id,
    name,
    value
  };
  dispatch(addExchange(newPost));
};

export const defineEuroRate = data => dispatch => {
  dispatch(addRate(data));
};

export const deleteExchangeCreator = data => dispatch => {
  dispatch(deleteExchange(data));
};

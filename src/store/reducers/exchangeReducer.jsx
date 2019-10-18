import {
  FETCH_CURRENCY,
  ADD_EXCHANGE,
  DEFINE_RATE,
  DELETE_EXCHANGE
} from "../actions/actionTypes";

const initialState = {
  currency: [],
  exchange: [],
  rate: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY:
      return {
        ...state,
        currency: action.data
      };
    case ADD_EXCHANGE:
      return {
        ...state,
        exchange: [...state.exchange, action.data]
      };
    case DEFINE_RATE:
      return {
        ...state,
        rate: action.data
      };
    case DELETE_EXCHANGE:
      return {
        ...state,
        exchange: state.exchange.filter(ex => ex.id !== action.data)
      };
    default:
      return state;
  }
};

export default function appReducer(state, action) {
  switch (action.type) {
    case 'DELETE_TRANSACTION': {
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    }
    case 'ADD_TRANSACTION': {
      let { text, amount } = action.payload;
      amount = +amount;
      const id = state.transactions.length + 1;
      return {
        ...state,
        transactions: [...state.transactions, { text, amount, id }],
      };
    }
    default:
      return state;
  }
}

const initialSate = {
  email: "risano@gmail.com",
  count: 0,
};

const counterReducer = (state = initialSate, action) => {

  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "CHANGE_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;

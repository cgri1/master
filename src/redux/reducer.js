import assign from "lodash/assign";

const defaultValues = {
  detailsOfChar: [],
  flag: false
};

export const charDetails = function(
  state = defaultValues,
  action = { type: "UNKNOWN" }
) {
  const { payload } = action;
  switch (action.type) {
    case "SET_DETAILS":
      return assign({}, state, {
        detailsOfChar: payload.detailsOfChar
      });
    case "SET_ROUTE":
      return assign({}, state, {
        flag: payload.flag
      });
    default:
      return state;
  }
};

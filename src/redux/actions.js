import { store } from "./store";

export function setDetailsOfChar(detailsOfChar) {
  store.dispatch({
    type: "SET_DETAILS",
    payload: {
      detailsOfChar
    }
  });
}

export function setRoute(flag) {
  store.dispatch({
    type: "SET_ROUTE",
    payload: {
      flag
    }
  });
}

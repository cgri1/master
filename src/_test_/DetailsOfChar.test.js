import React from "react";
import DetailsOfChar from "../components/DetailsOfChar";
import { shallow, render, mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../redux/store";
// Create the mock store
import configureMockStore from "redux-mock-store";
const initialState = {};
const mockStore = configureMockStore(initialState);

test("DetailsOfChar snapshot", () => {
  const component = shallow(
    <Provider store={store}>
      <DetailsOfChar />
    </Provider>
  );
  expect(component).toMatchSnapshot();
});

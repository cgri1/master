import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../redux/store";

test("App snapshot", () => {
  const component = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(component).toMatchSnapshot();
});

import React, { Component } from "react";
import MainPage from "./components/MainPage";
import { connect } from "react-redux";
import DetailsOfChar from "./components/DetailsOfChar";
import "./App.css";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import Back from "material-ui/svg-icons/navigation/arrow-back";
import * as Details from "./redux/actions";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleClick() {
    alert("onClick triggered on the title component");
  }

  handleBack(e) {
    Details.setRoute(false);
  }

  render() {
    return (
      <div className="App">
        <AppBar
          style={{ backgroundColor: "#282c34" }}
          title="Rick and Morty"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.handleBack}
          iconElementLeft={
            <IconButton>
              <Back />
            </IconButton>
          }
        />
        {this.props.flag ? <DetailsOfChar /> : <MainPage />}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  flag: state.charDetails.flag
});

App = connect(mapStateToProps)(App);
export default App;

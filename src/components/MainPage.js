import React, { Component } from "react";
import "../App.css";
import * as Details from "../redux/actions";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageForChar: [],
      nameForChar: [],
      results: [],
      height: window.innerHeight
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.getResult = this.getResult.bind(this);
    this.getCharacter = this.getCharacter.bind(this);
    this.detailOfImage = this.detailOfImage.bind(this);
  }

  componentDidMount() {
    this.getResult();
    this.pageNumber = 2;
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    // const windowHeight =
    //   "innerHeight" in window
    //     ? window.innerHeight
    //     : document.documentElement.offsetHeight;
    const windowHeight = window.innerHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    console.log(window.pageYOffset)
    console.log(windowHeight)
    console.log(docHeight)
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight-1) {
      if (this.pageNumber < 26) {
        fetch(
          "https://rickandmortyapi.com/api/character/?page=" +
            this.pageNumber.toString()
        )
          .then(res => res.json())
          .then(result => {
            this.setState(prevState => {
              return {
                results: [...prevState.results, ...result.results]
              };
            });
          });
      }
      this.pageNumber = this.pageNumber + 1;
    }
  }

  getResult() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(res => res.json())
      .then(result => {
        this.setState({
          results: result.results
        });
      });
  }

  getCharacter(result) {
    let imageOfChar = [];
    for (let x = 0; x < result.length; x++) {
      imageOfChar.push(
        <div
          id={x}
          key={x}
          onClick={this.detailOfImage}
          style={{ border: "5px solid", marginBottom: 10 }}
        >
          <img src={result[x].image} alt="" />
          <p>{result[x].name}</p>
        </div>
      );
    }

    return imageOfChar;
  }

  detailOfImage(e) {
    let indexOfChar = e.currentTarget.id;
    Details.setRoute(true);
    Details.setDetailsOfChar(this.state.results[indexOfChar]);
  }

  render() {
    return (
      <header className="App-header">
        {this.getCharacter(this.state.results)}
      </header>
    );
  }
}

export default MainPage;

import React, { Component } from "react";
import "../App.css";
import { Card, CardMedia, CardTitle, CardText } from "material-ui/Card";
import { connect } from "react-redux";

class DetailsOfChar extends Component {
  constructor(props) {
    super(props);

    this.state = { epsiodeName: [] };
    this.getEpsiode = this.getEpsiode.bind(this);
    this.getFormattedEpisodeName = this.getFormattedEpisodeName.bind(this);
  }

  componentDidMount() {
    this.getEpsiode();
  }

  getEpsiode() {
    let epsiode = this.props.detailsOfChar.episode;
    for (let y = epsiode.length - 1; y > epsiode.length - 6; y--) {
      if (epsiode[y] !== undefined) {
        fetch(epsiode[y])
          .then(res => res.json())
          .then(result => {
            this.setState(prevState => {
              return {
                epsiodeName: [...prevState.epsiodeName, ...(result.name + ",")]
              };
            });
          });
      }
    }
  }

  getFormattedEpisodeName(episodeName) {}

  render() {
    return (
      <div className="Detail-header">
        <Card style={{ width: 400, height: 400 }}>
          <CardMedia
            overlay={
              <CardTitle
                title={this.props.detailsOfChar.name}
                subtitle={this.props.detailsOfChar.origin.name}
              />
            }
          >
            <img src={this.props.detailsOfChar.image} alt="" />
          </CardMedia>
          <CardText
            style={{
              backgroundColor: "#282c34",
              color: "#ffffff",
              fontSize: 20,
              textAlign: "center"
            }}
          >
            {this.state.epsiodeName}
          </CardText>
        </Card>
        {/* <img src={this.props.detailsOfChar.image} />
        <p>{this.props.detailsOfChar.name}</p>
        <p>{this.props.detailsOfChar.origin.name}</p>
        <p>{this.state.epsiodeName}</p> */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  detailsOfChar: state.charDetails.detailsOfChar
});

DetailsOfChar = connect(mapStateToProps)(DetailsOfChar);
export default DetailsOfChar;

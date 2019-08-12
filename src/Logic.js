import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
class Logic extends React.Component {
  state = {
    lat: null,
    long: null,
    errmsg: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      },

      error => {
        this.setState({
          errmsg: error.message
        });
      }
    );
  }
  display = () => {
    if (this.state.errmsg && !this.state.lat && !this.state.long) {
      return <div> Error: {this.state.errmsg} </div>;
    }

    if (!this.state.errmsg && this.state.lat && this.state.long) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please Accept the location Request" />;
  };

  render() {
    return <div> {this.display()} </div>;
  }
}
export default Logic;

import './SeasonDisplay.css';
import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const Seasonconfif = {
  summer: {
    text: "Its Sunny ",
    iconName: "sun"
  },
  winter: {
    text: "Its Chilly Bro",
    iconName: "snowflake"
  }
};

const SeasonDisplay = props => {
  const Season = getSeason(props.lat, new Date().getMonth);
  const { text, iconName } = Seasonconfif[Season];

  return (
    <div className={`season-display ${Season}`} >
      <i className={`icon-left massive ${iconName} icon`} />
      <h1> {text} </h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;

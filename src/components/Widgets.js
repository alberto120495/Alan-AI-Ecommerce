import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticles = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticles("PAPA React is back", "Top news - 9099 readers")}
      {newsArticles("Coronavirus: MX updates", "Top news - 886 readers")}
      {newsArticles("Tesla hits new highs", "Cars & auto - 300 readers")}
      {newsArticles("Bitcoin Breaks $22k", "Code - 123 readers")}
      {newsArticles(" Is this the end of Facebook?", "Top news - 100 readers")}
    </div>
  );
}

export default Widgets;

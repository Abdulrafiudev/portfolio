import React from "react";
import "../../components/portfolio/portfolio.css";

let Wordings = function (props) {
  return (
    <>
      <div className="portfolio_container">
        <span className="portfolio_detail"> {props.detail} </span>
        <span className="portfolio_content"> {props.content} </span>
      </div>
    </>
  );
};

export default Wordings;

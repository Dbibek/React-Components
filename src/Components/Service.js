import React from "react";

const Service = props => {
  return (
    <div className="small-trunk">
      <span class="blackcircle"><i class="fas fa-mobile-alt"></i></span>
      <h1>{props.Title}</h1>
      <p>{props.Description}</p>
      {props.Button}
    </div>
  );
};
export default Service;

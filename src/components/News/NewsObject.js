import React from "react";
import "./newsObject.css";

const NewsObject = ({
  title,
  imageurl,
  url,
  tags
}) => {
  return (
    <div className="cryptoCoin">
      <img src={imageurl} alt={`${tags}`} className="newsLogo" />
      <p className="coinPrice"> {title} <a href={url}>Read more..</a></p>       
    </div>
  );
};

export default NewsObject;
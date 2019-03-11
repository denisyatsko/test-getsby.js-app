import React from "react";

const Article = ({
  content: {
    title,
    text
  }
}) => (
  <div>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
)

export default Article
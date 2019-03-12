import React from "react";

// Instruments
import styles from './style.module.css';

const Article = ({
  content: {
    articleDescr,
    publishedAt,
    articleImg: {
      file: {
        url
      }
    }
  }
}) => (
  <div className = { styles.article }>
  	<img src = { url } alt="" />
  	<div className = { styles.content }>
	    <p>{articleDescr}</p>
	    <span>{publishedAt}</span>
	</div>
  </div>
)

export default Article;
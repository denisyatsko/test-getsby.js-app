import React from "react";
import { Link } from "gatsby";

// Instruments
import styles from './style.module.css';

export default () => (
  <div>
    <ul className = { styles.menu }>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/blog">blog</Link>
      </li>
    </ul>
  </div>
);
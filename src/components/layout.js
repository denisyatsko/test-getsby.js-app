import React from "react";

import Menu from './menu/';

export default ({ children }) => (
  <div className = 'container'>
    <Menu/>
    <div>
      {children}
    </div>
  </div>
);
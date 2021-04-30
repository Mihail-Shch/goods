import React from "react";

import Navbar from "./Navbar";

function Layout(props) {
  return (
    <div className="container-xl content_wrapper">
      <Navbar
        titles={props.titles}
        category={props.category}
        setCategory={props.setCategory}
      />
      {props.children}
    </div>
  );
}

export default Layout;

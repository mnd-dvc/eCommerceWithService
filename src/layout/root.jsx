import React from "react";

/* Layout CSS & SCSS */
import "./Layout.css";

/* Global Layout Components */
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

function Root() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default Root;

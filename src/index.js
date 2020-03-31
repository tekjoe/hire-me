import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Helmet } from "react-helmet";

const AppWithHelmet = () => {
  return (
    <>
      <Helmet>
        <title>Hire Me</title>
        <meta
          name="description"
          content="Hire Me – A Frontend Mentor Challenge"
        />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap');
        </style>
      </Helmet>
      <App />
    </>
  );
};

ReactDOM.render(<AppWithHelmet />, document.getElementById("root"));

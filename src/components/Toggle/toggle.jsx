import React from "react";
import "./toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { context_theme } from "../../App";
import { useContext } from "react";

function Toggle() {
  // The useContext hook enables us to get the context that was passed in as values in our context_heme.Provider
  let [is_dark, handle_toggle] = useContext(context_theme);
  return (
    <>
      <div className="toggle" onClick={handle_toggle}>
        <Moon />
        <Sun />
        <div className="toggle_button" style={{ left: is_dark && "0" }}></div>
      </div>
    </>
  );
}

export default Toggle;

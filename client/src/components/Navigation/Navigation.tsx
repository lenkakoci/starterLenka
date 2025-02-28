import { Link } from "react-router";
import React from "react";
import "./styles.css";

export const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <Link to="/events">Nastávající akce</Link>
      <Link to="/formik">Zadej novou akci</Link>
    </nav>
  );
};

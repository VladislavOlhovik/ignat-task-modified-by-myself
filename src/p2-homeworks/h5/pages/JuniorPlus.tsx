import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../Routes";

function JuniorPlus() {
  const wrapper = {
    display: "flex",
    flexDirection: "column" as "column",
  };
  return (
    <div style={wrapper}>
      <NavLink to={PATH.HW1}>HomeWork-1</NavLink>
      <NavLink to={PATH.HW2}>HomeWork-2</NavLink>
      <NavLink to={PATH.HW3}>HomeWork-3</NavLink>
      <NavLink to={PATH.HW4}>HomeWork-4</NavLink>
      <NavLink to={PATH.HW6}>HomeWork-6</NavLink>
      <NavLink to={PATH.HW7}>HomeWork-7</NavLink>
      <NavLink to={PATH.HW8}>HomeWork-8</NavLink>
    </div>
  );
}

export default JuniorPlus;

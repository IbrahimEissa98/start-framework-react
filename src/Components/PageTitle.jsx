import React from "react";

export default function PageTitle({ title, bgc = "#fff" }) {
  return (
    <>
      <h2 className="text-uppercase fs-1 fw-bold">{title}</h2>
      <div className="line flex-center my-2">
        <div style={{ backgroundColor: bgc }} className="line-1"></div>
        <i className="fa-solid fa-star mx-3"></i>
        <div style={{ backgroundColor: bgc }} className="line-2"></div>
      </div>
    </>
  );
}

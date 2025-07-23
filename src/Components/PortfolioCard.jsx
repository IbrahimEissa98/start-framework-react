import React from "react";

export default function PortfolioCard({ src, openLightBox, index }) {
  return (
    <>
      <div
        onClick={() => openLightBox(index)}
        className="inner position-relative rounded-2 overflow-hidden"
      >
        <div className="img-container">
          <img className="w-100" src={src} alt={src} />
        </div>
        <div className="layer position-absolute flex-center">
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
    </>
  );
}

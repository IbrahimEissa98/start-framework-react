import React, { useEffect } from "react";

export default function LightBox({
  isOpenLightBox,
  currentImg,
  imagesNumber,
  closeLightBox,
  images,
  previousImg,
  nextImg,
}) {
  function closeLightBoxHandler(e) {
    if (e.target.classList.contains("lightBox")) {
      closeLightBox();
    }
  }
  useEffect(() => {
    const lightBox = document.querySelector(".lightBox");
    lightBox.addEventListener("click", closeLightBoxHandler);
    return () => {
      lightBox.removeEventListener("click", closeLightBoxHandler);
    };
  });
  return (
    <div
      className={`lightBox ${isOpenLightBox ? null : "d-none"}`}
      id="lightBox"
    >
      <div className="img-box position-relative">
        <div
          className="w-100 h-100"
          style={{
            backgroundImage: `url(${images[currentImg]})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        {/* <img src={images[currentImg]} className="d-block" /> */}
        <div className="icons">
          <div onClick={previousImg} className="left direction previous">
            <i className="fa-solid fa-caret-left" />
          </div>
          <div onClick={nextImg} className="right direction next">
            <i className="fa-solid fa-caret-right" />
          </div>
        </div>
        <div onClick={closeLightBox} className="close">
          <i className="fa-regular fa-circle-xmark" />
        </div>
        <div className="images-count text-center text-white mt-2">
          image
          <span className="mx-1 text-danger">{currentImg + 1}</span>
          of
          <span className="mx-1">{imagesNumber}</span>
        </div>
      </div>
    </div>
  );
}

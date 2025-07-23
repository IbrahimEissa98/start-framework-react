import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTitle";
import image1 from "../assets/images/work-1.jpg";
import image2 from "../assets/images/work-2.jpg";
import image3 from "../assets/images/work-3.jpg";
import image4 from "../assets/images/work-4.jpg";
import image5 from "../assets/images/work-5.jpg";
import image6 from "../assets/images/work-6.jpg";
import PortfolioCard from "../Components/PortfolioCard";
import LightBox from "../Components/LightBox";

export default function Portfolio1() {
  const [isOpenLightBox, setIsOpenLightBox] = useState(false);
  const images = [image1, image2, image3, image4, image5, image6];
  // let currentImg = 0;
  const [currentImg, setCurrentImg] = useState(0);
  // const lightBox, lightBoxImg, lightBoxClose, lightBoxNext, lightBoxPrevious,lightBoxImgs, lightBoxImgsContainer;

  useEffect(() => {
    document.title = "Portfolio";

    // Initialize LightBox
    const lightBox = document.querySelector("#lightBox");
    const lightBoxImgsContainer = Array.from(
      document.querySelectorAll(".portfolio .row .inner")
    );
    // console.log(lightBoxImgsContainer);
    const lightBoxImgs = lightBoxImgsContainer.map(
      (img) => img.children[0].children[0]
    );
    // console.log(lightBoxImgs);

    const lightBoxImg = document.querySelector(".lightBox img");
    const lightBoxClose = document.querySelector("#lightBox .close i");
    const lightBoxNext = document.querySelector("#lightBox .next");
    const lightBoxPrevious = document.querySelector("#lightBox .previous");

    // for (let i = 0; i < lightBoxImgsContainer.length; i++) {
    //   lightBoxImgs[i].addEventListener("click", function (e) {
    //     var imgSrc = e.target.getAttribute("src");
    //     lightBoxImg.setAttribute("src", imgSrc);
    //     // lightBox.classList.remove("d-none");
    //     currentImg = lightBoxImgs.indexOf(e.target);
    //     setIsOpenLightBox(true);
    //     // console.log(currentImg);
    //     // console.log(e.target);
    //   });
    // }
    lightBoxImgsContainer.forEach((box) => {
      // console.log(index);
      box.addEventListener("click", function () {
        let current = lightBoxImgsContainer.indexOf(this);
        let imgSrc = lightBoxImgs[current].getAttribute("src");
        // console.log(imgSrc);
        // console.log(e.target);

        lightBoxImg.setAttribute("src", imgSrc);
        // lightBox.classList.remove("d-none");
        // lightBox.classList.add("d-block");
        console.log(current);

        setCurrentImg(current);
        // currentImg = lightBoxImgsContainer.indexOf(this);
        console.log(currentImg);
        // console.log(lightBoxImgsContainer.indexOf(this));

        setIsOpenLightBox(true);
      });
    });

    // Close FloatBox
    lightBoxClose.addEventListener("click", function () {
      closeLightBox();
    });
    lightBox.addEventListener("click", function (e) {
      if (e.target.classList.contains("floatBox")) {
        closeLightBox();
      }
    });

    // Navigation FloatBox
    document.addEventListener("keyup", function (e) {
      if (e.key == "Escape") {
        closeLightBox();
      } else if (e.key == "ArrowRight") {
        nextImg();
      } else if (e.key == "ArrowLeft") {
        previousImg();
      }
    });
    lightBoxNext.addEventListener("click", function () {
      nextImg();
    });
    lightBoxPrevious.addEventListener("click", function () {
      previousImg();
    });
    function nextImg() {
      if (currentImg == lightBoxImgs.length) {
        setCurrentImg(0);
        // currentImg = 0;
      }
      let nextImgSrc = lightBoxImgs[currentImg].getAttribute("src");
      lightBoxImg.setAttribute("src", nextImgSrc);
      setCurrentImg(currentImg + 1);
      // ++currentImg;
    }
    function previousImg() {
      if (currentImg == -1) {
        setCurrentImg(lightBoxImgs.length - 1);
        // currentImg = lightBoxImgs.length - 1;
      }
      let prevImgSrc = lightBoxImgs[currentImg].getAttribute("src");
      lightBoxImg.setAttribute("src", prevImgSrc);
      setCurrentImg(currentImg - 1);
      // --currentImg;
    }
    function closeLightBox() {
      lightBox.classList.add("d-none");
      setIsOpenLightBox(false);
    }
  });

  // useEffect(() => {
  //   const lightBoxImg = document.querySelector(".lightBox img");
  //   if (currentImg >= 0 && currentImg < images.length) {
  //     lightBoxImg.setAttribute("src", images[currentImg]);
  //   }
  // });

  return (
    <>
      <div className="portfolio py-5 flex-center">
        <div className="container flex-center flex-column">
          <PageTitle title="portfolio component" bgc="var(--first-color)" />
          <div className="row mt-2 g-5">
            {Array.from({ length: images.length }, (_, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <PortfolioCard src={images[index]} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <LightBox
        isOpenLightBox={isOpenLightBox}
        currentImg={currentImg}
        imagesNumber={images.length}
      />
    </>
  );
}

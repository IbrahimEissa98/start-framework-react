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

export default function Portfolio() {
  const [isOpenLightBox, setIsOpenLightBox] = useState(false);
  const images = [image1, image2, image3, image4, image5, image6];
  const [currentImg, setCurrentImg] = useState(0);

  function keysEvents(e) {
    if (e.key === "Escape" && isOpenLightBox) {
      closeLightBox();
    }
    if (e.key === "ArrowRight" && isOpenLightBox) {
      nextImg();
    }
    if (e.key === "ArrowLeft" && isOpenLightBox) {
      previousImg();
    }
  }

  useEffect(() => {
    document.title = "Portfolio";
    // console.log("Component did Mount");
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", keysEvents);
    // console.log("Component did update");
    return () => {
      window.removeEventListener("keydown", keysEvents);
      // console.log("component will unmount");
    };
  });

  function openLightBox(index) {
    setIsOpenLightBox(true);
    // console.log(index);
    setCurrentImg(index);
    // console.log("Current Image Index:", currentImg);
  }

  function closeLightBox() {
    setIsOpenLightBox(false);
  }

  function nextImg() {
    currentImg < images.length - 1
      ? setCurrentImg(currentImg + 1)
      : setCurrentImg(0);
  }

  function previousImg() {
    currentImg > 0
      ? setCurrentImg(currentImg - 1)
      : setCurrentImg(images.length - 1);
  }

  return (
    <>
      <div className="portfolio py-5 flex-center">
        <div className="container flex-center flex-column overflow-hidden">
          <PageTitle title="portfolio component" bgc="var(--first-color)" />
          <div className="row mt-2 g-5">
            {Array.from({ length: images.length }, (_, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <PortfolioCard
                  openLightBox={openLightBox}
                  src={images[index]}
                  index={index}
                />
              </div>
            ))}
            {/* {images.map((img, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <PortfolioCard openLightBox={openLightBox} src={img} />
              </div>
            ))} */}
          </div>
        </div>
      </div>
      <LightBox
        isOpenLightBox={isOpenLightBox}
        currentImg={currentImg}
        imagesNumber={images.length}
        closeLightBox={closeLightBox}
        images={images}
        setCurrentImg={setCurrentImg}
        nextImg={nextImg}
        previousImg={previousImg}
      />
    </>
  );
}

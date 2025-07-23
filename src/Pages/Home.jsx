import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import avatar from "../assets/images/avataaars.svg";
import PageTitle from "../Components/PageTitle";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <div className="home py-5 text-white flex-center">
        <div className="container flex-center flex-column">
          <div className="img-container mb-3">
            <img width={"100%"} src={avatar} alt="avatar" />
          </div>
          <PageTitle title="Start Framework" />
          <p className="mt-2">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}

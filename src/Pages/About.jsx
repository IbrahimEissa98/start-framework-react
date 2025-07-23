import React, { useEffect } from "react";
import PageTitle from "../Components/PageTitle";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <div className="about py-5 text-white flex-center">
        <div className="container flex-center flex-column">
          <PageTitle title="about component" />
          <div className="row px-5 mt-2">
            <div className="col-md-6 px-md-4 text-center text-md-start">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 px-md-4 text-center text-md-start">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

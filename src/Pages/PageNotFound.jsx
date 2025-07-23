import React, { useEffect } from "react";
import notFoundImg from "../assets/images/page-not-found.jpg";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  useEffect(() => {
    document.title = "Page Not Found";
  }, []);
  return (
    <>
      <div className="notFound py-5 flex-center">
        <div className="flex-center flex-column">
          <div className="row px-5 mt-2">
            <div className="col-md-6 offset-md-3 px-md-4 text-center">
              <div className="inner">
                <img src={notFoundImg} className="w-100" alt="" />
              </div>
            </div>
            <div className="content col-md-8 offset-md-2 px-md-4 mt-3 text-center flex-center flex-column">
              <p>
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
              </p>
              <p>
                Please check the URL for errors <br /> or <br /> return to the
                <Link
                  to={"/"}
                  style={{ color: "var(--second-color)" }}
                  className="ms-1 text-decoration-underline"
                >
                  Home page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

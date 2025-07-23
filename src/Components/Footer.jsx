import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="text-white text-center">
        <div className="top py-5">
          <div className="container p-5">
            <div className="row g-5">
              <div className="col-md-6 col-lg-4">
                <div className="inner flex-center flex-column text-center">
                  <h3 className="text-uppercase">location</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="inner flex-center flex-column text-center">
                  <h3 className="text-uppercase">around the web</h3>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                      <a
                        href="https://www.facebook.com"
                        className="text-white fs-5 mx-2"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com"
                        className="text-white fs-5 mx-2"
                        target="_blank"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com"
                        className="text-white fs-5 mx-2"
                        target="_blank"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com"
                        className="text-white fs-5 mx-2"
                        target="_blank"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-0">
                <div className="inner flex-center flex-column text-center">
                  <h3 className="text-uppercase">ABOUT FREELANCER</h3>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <p className="mb-0 py-3">
              All rights reserved ©. Start Framework 2025.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

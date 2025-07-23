import React, { useEffect } from "react";
import PageTitle from "../Components/PageTitle";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";

    const inputs = Array.from(document.querySelectorAll(".input-box input"));
    const labels = document.querySelectorAll(".input-box label");

    inputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        if (e.target.value.length > 0) {
          labels[inputs.indexOf(e.target)].style = "top: -25px";
        } else {
          labels[inputs.indexOf(e.target)].style = "top: 0";
        }
      });
    });
  }, []);

  return (
    <>
      <div className="contact py-5 flex-center">
        <div className="container flex-center flex-column">
          <PageTitle title="contact section" bgc="var(--first-color)" />
          <div className="form-box mt-5 mx-auto">
            <form action={"javascript:void(0)"} className="form">
              <div className="input-box mb-5 position-relative">
                <label htmlFor="name" className="position-absolute">
                  User Name
                </label>
                <input
                  type="text"
                  className="w-100 position-relative"
                  id="name"
                  placeholder="User Name"
                />
              </div>
              <div className="input-box mb-5 position-relative">
                <label htmlFor="age" className="position-absolute">
                  User Age
                </label>
                <input
                  type="number"
                  className="w-100 position-relative"
                  id="age"
                  placeholder="User Age"
                />
              </div>
              <div className="input-box mb-5 position-relative">
                <label htmlFor="email" className="position-absolute">
                  User Email
                </label>
                <input
                  type="email"
                  className="w-100 position-relative"
                  id="email"
                  placeholder="User Email"
                />
              </div>
              <div className="input-box mb-5 position-relative">
                <label htmlFor="password" className="position-absolute">
                  User Password
                </label>
                <input
                  type="password"
                  className="w-100 position-relative"
                  id="password"
                  placeholder="User Password"
                />
              </div>
              <button type="submit" className="text-capitalize d-block mx-auto">
                send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

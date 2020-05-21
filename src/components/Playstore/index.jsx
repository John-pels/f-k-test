import React from "react";
import "./playstore.scss";

const Playstore = () => (
  <section className="playstore ">
    <div className="positioned-ellipse">
      <img
        src="https://res.cloudinary.com/john-pels/image/upload/v1590060991/corner.png"
        alt=""
      />
    </div>
    <div className="container">
      <div className="center">
        <div className="row">
          <div className="col-lg-12 col-sm-12 ">
            <h1 className="playstore__hero-text">
              Start saving and investing <br /> in just 3 minutes.
            </h1>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-3 col-sm-12 btn-wrapper mr ">
            <div className="btn-playstore">
              <div className="img">
                <img
                  src="https://res.cloudinary.com/john-pels/image/upload/v1590059150/play-store-icon-download-61_1.png"
                  alt=""
                />
              </div>
              <div className=" ml-4">
                <span>
                  Get it on <br />
                </span>
                <span className="weight-text">Playstore</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 btn-wrapper">
            <div className="btn-apple">
              <div className="img">
                <img
                  src="https://res.cloudinary.com/john-pels/image/upload/v1590059150/apple.png"
                  alt=""
                  className="mt-3 mr-2"
                />{" "}
              </div>
              <div>
                Download on the <br />{" "}
                <span className="weight-text">Apple store</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Playstore;

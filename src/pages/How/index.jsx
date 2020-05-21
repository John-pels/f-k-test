import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Playstore from "../../components/Playstore";
import "./how.scss";

const How = () => (
  <main className="how">
    <header className="header">
      <Navigation />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <h1 className="hero-text">
              The first savings and <br /> investment platform you’ll <br />{" "}
              love.
            </h1>
          </div>
        </div>
      </div>
    </header>
    <div className="container">
      <div className="row">
        <div className="col-lg-12  col-sm-12">
          <div className="photo">
            <img
              src="https://res.cloudinary.com/john-pels/image/upload/v1590073558/illustration.png"
              alt=""
              className="img-responsive ph-img"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <h2 className="text-center h2-how">Why do we love what we do?</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <p className="p-how">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Nunc
            elit sollicitudin porta facilisis viverra. Eget <br /> est vitae
            orci bibendum. Tortor pellentesque vel pellentesque <br /> vel.
            Rutrum sit mauris nisl eu diam <br /> curabitur. Viverra in
            consequat, et eget interdum <br /> purus etiam.{" "}
          </p>
        </div>
      </div>
    </div>
    <Playstore />
    <Footer />
  </main>
);

export default How;

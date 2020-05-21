import React from "react";
import Navigation from "../../components/Navigation";
import Playstore from "../../components/Playstore";
import Footer from "../../components/Footer";
import "./homepage.scss";

const Homepage = () => (
  <div className="homepage">
    <header className="header">
      <Navigation />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <h1 className="hero-text">
              What Our Customers <br /> are saying
            </h1>
          </div>
        </div>
      </div>
    </header>
    <main className="main">
      <div className="container-fluid padding">
        <div className="row ">
          <div className="col-lg-5  col-sm-12 ">
            <div className="main__col">
              <div className="image items">
                <img
                  src="https://res.cloudinary.com/john-pels/image/upload/v1590055255/Ellipse_15.png"
                  alt=""
                />
              </div>
              <div className="items">
                <h5>Ceo, Pepperthemgang</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempor nunc dolor mi, lacus. Pretium viverra velit et, duis
                  natoque sit libero arcu. Condimentum nisl quam ac tristique
                  sagittis{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2 col-sm-12 ">
            <div className="main__col">
              <div className="image items">
                <img
                  src="https://res.cloudinary.com/john-pels/image/upload/v1590055255/Ellipse_15.png"
                  alt=""
                />
              </div>
              <div className="items">
                <h5>Ceo, Pepperthemgang</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempor nunc dolor mi, lacus. Pretium viverra velit et, duis
                  natoque sit libero arcu. Condimentum nisl quam ac tristique
                  sagittis{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 col-sm-12 ">
            <div className="main__col">
              <div className="image items">
                <img
                  src="https://res.cloudinary.com/john-pels/image/upload/v1590055255/Ellipse_15.png"
                  alt=""
                />
              </div>
              <div className="items">
                <h5>Ceo, Pepperthemgang</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempor nunc dolor mi, lacus. Pretium viverra velit et, duis
                  natoque sit libero arcu. Condimentum nisl quam ac tristique
                  sagittis{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2 col-sm-12 ">
            <div className="main__col">
              <div className="image items">
                <img
                  src="https://res.cloudinary.com/john-pels/image/upload/v1590055255/Ellipse_15.png"
                  alt=""
                />
              </div>
              <div className="items">
                <h5>Ceo, Pepperthemgang</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempor nunc dolor mi, lacus. Pretium viverra velit et, duis
                  natoque sit libero arcu. Condimentum nisl quam ac tristique
                  sagittis{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 col-sm-12 ">
            <div className="main__col">
              <div className="image items">
                <img
                  src="https://res.cloudinary.com/john-pels/image/upload/v1590055255/Ellipse_15.png"
                  alt=""
                />
              </div>
              <div className="items">
                <h5>Ceo, Pepperthemgang</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempor nunc dolor mi, lacus. Pretium viverra velit et, duis
                  natoque sit libero arcu. Condimentum nisl quam ac tristique
                  sagittis{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2 col-sm-12 ">
            <div className="main__col">
              <div className="image items">
                <img
                  src="https://res.cloudinary.com/john-pels/image/upload/v1590055255/Ellipse_15.png"
                  alt=""
                />
              </div>
              <div className="items">
                <h5>Ceo, Pepperthemgang</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempor nunc dolor mi, lacus. Pretium viverra velit et, duis
                  natoque sit libero arcu. Condimentum nisl quam ac tristique
                  sagittis{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 col-sm-12 ">
            <div className="main__col">
              <div className="image items">
                <img
                  src="https://res.cloudinary.com/john-pels/image/upload/v1590055255/Ellipse_15.png"
                  alt=""
                />
              </div>
              <div className="items">
                <h5>Ceo, Pepperthemgang</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempor nunc dolor mi, lacus. Pretium viverra velit et, duis
                  natoque sit libero arcu. Condimentum nisl quam ac tristique
                  sagittis{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2 col-sm-12 ">
            <div className="main__col">
              <div className="image items">
                <img
                  src="https://res.cloudinary.com/john-pels/image/upload/v1590055255/Ellipse_15.png"
                  alt=""
                />
              </div>
              <div className="items">
                <h5>Ceo, Pepperthemgang</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempor nunc dolor mi, lacus. Pretium viverra velit et, duis
                  natoque sit libero arcu. Condimentum nisl quam ac tristique
                  sagittis{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Playstore />
    <Footer />
  </div>
);

export default Homepage;

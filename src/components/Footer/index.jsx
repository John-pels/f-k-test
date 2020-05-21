import React from "react";
import "./footer.scss";

const Footer = () => (
  <section className="footer padding">
    <div className="container-fluid ">
      <div className="row">
        <div className="col-lg-5 col-sm-12">
          <div className="footer__first-col">
            <div className="brand">
              <img
                src="https://res.cloudinary.com/john-pels/image/upload/v1590034057/fandk.svg"
                alt=""
              />
            </div>
            <p className="first-col-p">
              At F&K Savings we intend to help <br /> millions of people reach
              their savings <br /> goals and increase their money.
            </p>
            <p className="copyright">
              F&K Savings Limited, 2020. All rights reserved. <br /> Company
              Registration Number: 123456
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="footer__second-col">
            <h5 className="second-col-h5">about</h5>
            <ul className="ul">
              <li>Customers</li>
              <li>Company</li>
              <li>Product</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Terms and conditions</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12">
          <div className="footer__third-col">
            <h5 className="third-col-h5">Help</h5>
            <ul className="ul">
              <li>How it works</li>
              <li>FAQ'S</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12">
          <div className="footer__fourth-col">
            <h5 className="fourth-col-h5">Social</h5>
            <div className="social">
              <div className="icons mr-3">
                <img
                  src="https://res.cloudinary.com/john-pels/image/upload/v1590068254/fb.png"
                  alt=""
                />
              </div>
              <div className="icons mr-3">
                <img
                  src="https://res.cloudinary.com/john-pels/image/upload/v1590068254/tw.png"
                  alt=""
                />
              </div>
              <div className="icons mr-3">
                <img
                  src="https://res.cloudinary.com/john-pels/image/upload/v1590068350/instagram.png"
                  alt=""
                />
              </div>
              <div className="icons"></div>
            </div>
            <p className="address mt-2">
              No. 3, Ayo Adekunle Close, New-Bodija <br /> Estate, Ibadan, Oyo
              state.
            </p>
            <p className="contact">
              hello@fandksavings.com.ng <br />
              081-045-962-33 (Main)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;

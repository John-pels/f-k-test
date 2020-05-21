import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Playstore from "../../components/Playstore";
import "./faq.scss";

const FAQ = () => (
  <main className="faq">
    <header className="header">
      <Navigation />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <h1 className="hero-text">Frequently Asked Questions</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-sm-12">
            <form action="">
              <input type="search" placeholder="Search for a question..." />
            </form>
          </div>
        </div>
      </div>
    </header>

    <section className="details">
      <div className="container-fluid">
        <div className="row mb">
          <div className="col-lg-3 col-sm-12">
            <h2 className="h2">General</h2>
          </div>
          <div className="col-lg-9 col-sm-12">
            <ul className="ul">
              <li>Lorem ipsum marledsum</li>
              <hr />
              <li>Lorem ipsum marledsum</li>
              <hr />
              <li>Lorem ipsum marledsum</li>
              <hr />
              <li>Lorem ipsum marledsum</li>
              <hr />
            </ul>
          </div>
        </div>

        <div className="row mb">
          <div className="col-lg-3 col-sm-12">
            <h2 className="h2">Fees & charges</h2>
          </div>
          <div className="col-lg-9 col-sm-12">
            <ul className="ul">
              <li>Lorem ipsum marledsum</li>
              <hr />
              <li>Lorem ipsum marledsum</li>
              <hr />
              <li>Lorem ipsum marledsum</li>
              <hr />
              <li>Lorem ipsum marledsum</li>
              <hr />
            </ul>
          </div>
        </div>

        <div className="row mb">
          <div className="col-lg-3 col-sm-12">
            <h2 className="h2">Fees & charges</h2>
          </div>
          <div className="col-lg-9 col-sm-12">
            <ul className="ul">
              <li>Lorem ipsum marledsum</li>
              <hr />
              <li>Lorem ipsum marledsum</li>
              <hr />
              <li>Lorem ipsum marledsum</li>
              <hr />
              <li>Lorem ipsum marledsum</li>
              <hr />
            </ul>
          </div>
        </div>

        <div className="row mb">
          <div className="col-lg-3 col-sm-12">
            <h2 className="h2">Fees & charges</h2>
          </div>
          <div className="col-lg-9 col-sm-12">
            <ul className="ul">
              <li>Lorem ipsum marledsum</li>
              <hr />
              <li>Lorem ipsum marledsum</li>
              <hr />
              <li>Lorem ipsum marledsum</li>
              <hr />
              <li>Lorem ipsum marledsum</li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </section>

    <Playstore />
    <Footer />
  </main>
);

export default FAQ;

import { Component } from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="about">
          <Banner />
        </div>
        <h1>A propos</h1>
        <Footer />
      </div>
    );
  }
}

export default About;

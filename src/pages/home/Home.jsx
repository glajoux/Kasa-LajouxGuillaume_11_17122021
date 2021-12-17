import React, { Component } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>Accueil</h1>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./error.css";

class Error extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <h2>404</h2>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link exact to="/">
            Retourner sur la page d'accueil
          </Link>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Error;

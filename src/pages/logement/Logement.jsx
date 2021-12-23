import React, { Component } from "react";
import { useParams } from "react-router";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

class Logement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("../../data/data.json")
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        // this.setState({
        //   data: jsonResponse,
        //   isLoading: false,
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="mainWrapper">
          <Header />
          <h1>Page de Logements</h1>
          <p></p>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Logement;

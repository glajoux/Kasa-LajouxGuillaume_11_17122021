import React, { Component } from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Location from "../../components/locations/Locations";

class Home extends Component {
  constructor(props) {
    super(props);
    this.titre = (
      <h2>
        Chez vous, <br />
        partout et ailleurs
      </h2>
    );

    this.state = {
      data: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("./data/data.json")
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({ data: jsonResponse, isLoading: false });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="home">
          <Banner titre={this.titre} />
        </div>
        <Location data={this.state.data} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;

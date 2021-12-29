import { Component } from "react";
import flecheSlide from "../../img/flecheSlide.svg";

class BtnSlider extends Component {
  render() {
    return (
      <button onClick={this.props.moveSlide()}>
        <img
          src={flecheSlide}
          alt="fleche caroussel"
          className={
            this.props.direction === "next" ? "arrowRight" : "arrowLeft"
          }
        />
      </button>
    );
  }
}

export default BtnSlider;

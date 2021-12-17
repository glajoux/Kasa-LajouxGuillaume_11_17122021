import { Component } from "react";
// import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    return (
      <li className="cardLi">
        <article className="locationCard">
          <img
            className="imgCard"
            src={this.props.location.cover}
            alt={this.props.location.title}
          />
          <h3>{this.props.location.title}</h3>
        </article>
      </li>
    );
  }
}

export default Card;

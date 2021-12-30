import { Component } from "react";
import etoileOrange from "../../img/etoileOrange.svg";
import etoileGris from "../../img/etoileGris.svg";
import "./stars.css";

class Stars extends Component {
  render() {
    const voteMax = [1, 2, 3, 4, 5];

    console.log(this.props);
    return (
      <div className="vote">
        {voteMax.map((vote, index) => (
          <img
            key={index}
            src={parseInt(this.props.vote) < vote ? etoileGris : etoileOrange}
            alt="etoile de vote"
          />
        ))}
      </div>
    );
  }
}

export default Stars;

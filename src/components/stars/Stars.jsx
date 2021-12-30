import { Component } from "react";
import etoileOrange from "../../img/etoileOrange.svg";
import etoileGris from "../../img/etoileGris.svg";
import "./stars.css";

class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const voteMax = [1, 2, 3, 4, 5];

    return (
      <div className="vote">
        {voteMax.map((vote, index) => (
          <img
            key={`star${index}`}
            src={this.props.vote < vote ? etoileGris : etoileOrange}
            alt="etoile de vote"
          />
        ))}
      </div>
    );
  }
}

export default Stars;

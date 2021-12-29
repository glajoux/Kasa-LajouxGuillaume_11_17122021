import { Component } from "react/cjs/react.production.min";

class Host extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.proprio);
    return (
      <div className="proprio">
        <h3>{this.props.proprio.name}</h3>
      </div>
    );
  }
}

export default Host;

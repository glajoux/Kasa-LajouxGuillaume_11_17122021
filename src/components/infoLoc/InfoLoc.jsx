import { Component } from "react";
import Dropdown from "../dropdown/Dropdown";
import Host from "../host/host";
import Stars from "../stars/Stars";
import "./infoLoc.css";

class InfoLoc extends Component {
  render() {
    console.log(this.props.data.equipments);
    return (
      <>
        <div className="infoContainer">
          <div className="elemLeft">
            <h2 className="titreLoc">{this.props.data.title}</h2>
            <p className="lieux">{this.props.data.location}</p>
            <div className="tags">
              <ul>
                {this.props.data.tags.map((tag, index) => (
                  <li key={tag - index} className="listeTags">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="elemRight">
            <div>
              <Stars vote={this.props.data.rating} />
            </div>
            <div>{/* <Host proprio={this.state.data.host} /> */}</div>
            <div className="proprio">
              <div className="nom">
                <h3>{this.props.data.host.name.split(" ")[0]}</h3>
                <h3>{this.props.data.host.name.split(" ")[1]}</h3>
              </div>
              <img src={this.props.data.host.picture} alt="propriétaire" />
            </div>
          </div>
        </div>
        <div className="drop">
          <Dropdown
            title="Description"
            describe={this.props.data.description}
          />
          <Dropdown title="Équipements" liste={this.props.data.equipments} />
        </div>
      </>
    );
  }
}

export default InfoLoc;

import React from "react";
import ReactDOM from "react-dom";

class Color extends React.Component {
  constructor(props) {
    super(props);
    //initial state
    
    this.state = {
      brand: "ford",
      model: "mustang",
      color: "red"
    };
//    this.flag = this.flag.bind(this);
  }

  changeColor = () => {
    this.setState({ color: "yellow" });
  };

  changeModel = () => {
      this.setState({model:"becak"})
  };

  changeClub = () => {
      this.setState({
        club: "liverpool",
        league: "premier-league",
        color: "white",
      });
  }

  changePrice = () => {
      this.setState({price:33})
  }

  



  render() {
    return (
      <>
        <h1>Hello class</h1>
        <h1>{this.state.brand}</h1>
        {/* <h1 style={{ color: this.state.color }}> Jersey {this.flag.club}</h1> */}
        <button type="button" onClick={this.changeColor}>
          Change JERSEY
        </button>

        <h2>The model is {this.state.model}</h2>
        <button type="button" onClick={this.changeModel}>
          Change model
        </button>

        <h2>This club is {this.state.club} Fc</h2>
        <button type="button" onClick={this.flag}>
          Change Club
        </button>

        <h2>Price car was {this.state.price}</h2>
        <button type="button" onClick={this.changePrice}>
          Change price
        </button>
        
      </>
     
    );
  }
}

export default Color;

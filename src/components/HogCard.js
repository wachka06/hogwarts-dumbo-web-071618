import React, {Component} from 'react';

class HogCard extends Component {
  constructor() {
    super()

    this.state = {
      flip: false
    }

  }

  handleFlip = () => {
    this.setState((prevState) => {
      return {flip: !prevState.flip}
    })
  }


  render() {
    // console.log("HogCard", this.props.hog)
    // console.log("STATE", this.state)

    return (
        <div className= "ui eight wide column">

          {this.state.flip === false
            ?
          <div className="pigTile">
            <button className="button" onClick={this.handleFlip}>Show details</button><br/>
            <img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(" ").join("_")}.jpg`)} className="img"/><br/>
            <strong>Name: </strong>{this.props.hog.name}
          </div>
          :
          <div>
            <button className="button" onClick={this.handleFlip}>Show details</button><br/><br/><br/>
            <strong>Specialty: </strong>{this.props.hog.specialty}<br/><br/>
            <strong>Greased: </strong>{this.props.hog.greased.toString()}<br/><br/>
            <strong>Weight: </strong>{this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}<br/>
            <strong>Highest medal achieved: </strong>{this.props.hog["highest medal achieved"]}
          </div>
          }

        </div>
    )
  }
}

export default HogCard;

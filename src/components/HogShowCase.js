import React, {Component} from 'react';
import HogCard from './HogCard.js';

class HogShowCase extends Component {
  constructor() {
    super()

  }


  render() {
    console.log("HogShowCase", this.props.hogs)

    return (
        <div className="ui grid container">
          {/* <p>HogShowCase</p> */}

          {this.props.hogs.map((hog) => {
            return <HogCard hog={hog}/>
          })}
        </div>
    )
  }
}

export default HogShowCase;

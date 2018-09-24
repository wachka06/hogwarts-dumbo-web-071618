import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogShowCase from './HogShowCase.js';

class App extends Component {
  constructor() {
    super()

    this.state = {
      hogs: hogs,
      filters: {
        type: 'all'
      }
    }
  }

  sortHogs = (event) => {
    // console.log(event.target.value)

    if (event.target.value === "name") {
      let sortedNameHogs = hogs.sort(function(hog1, hog2) {
        return hog1.name.localeCompare(hog2.name)
      })
      this.setState({hogs: sortedNameHogs,
      filters: {
        type: 'name'
      }})
    } else if (event.target.value === "weight") {
      let sortedWeightHogs = hogs.sort(function(hog1, hog2) {
        return hog1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - hog2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      })
      this.setState({hogs: sortedWeightHogs,
      filters: {
        type: 'weight'
      }})
    } else if (event.target.value === "greased") {
      let greasedHogs = hogs.filter((hog) => {
        return hog.greased === true
      })
      this.setState({hogs: greasedHogs,
      filters: {
        type: 'greased'
      }})
    } else {
      this.setState({
        hogs: hogs,
        filters: {
          type: 'all'
      }
    })
    }
  }

  render() {
    console.log(hogs)

    return (
      <div className="App">
          <Nav sortHogs={this.sortHogs}/>
          <HogShowCase hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;

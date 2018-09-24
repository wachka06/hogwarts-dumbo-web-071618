import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	console.log("NAV", props)

	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span><br/>
				<span className="normalText2">Sort hogs by: </span><select name="type" id="type" className="normalText2" onChange={props.sortHogs}>
	            <option value="all">all</option>
	            <option value="name">name</option>
	            <option value="weight">weight</option>
	            <option value="greased">greased</option>
	          </select>
		</div>
	)
}

export default Nav

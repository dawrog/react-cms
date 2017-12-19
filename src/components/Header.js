import React, { Component } from "react";
import "../App.css"

import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom"

export default class Header extends Component {
	render() {
		return(
			<div className="container-fluid text-center">
				<div className="page-header">
					<h1>Dawid Rogal <small>Novice Frontend Dewelopah</small></h1>
					<Link to="/" className="col-md-2">Home</Link>
					<Link to="/projects" className="col-md-2">Projects</Link>
					<Link to="/contact" className="col-md-2">Contact Me!</Link>
					<br/><br/><br/> 
				</div>
			</div>
		)
	}
}
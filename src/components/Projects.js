import React, { Component } from "react"
import "../App.css"

let defaultStyle = {
	color: "#fff"
}

let fakeServerData = {
	user: {
		name: "User",
		projects: [
			{
				name: "Wordpress Site",
				technologies: ["HTML", "PHP", "CSS", "jQuery"],
				days: [
					{deadline: "11 listopada 2018", duration: 93},
				]
			},
			{
				name: "Weather App",
				technologies: ["JS", "HTML", "CSS"],
				days: [
					{deadline: "11 listopada 2018", duration: 69},
				]
			},
			{
				name: "React CMS",
				technologies: ["JS", "React", "HTML", "Bootstrap"],
				days: [
					{deadline: "11 listopada 2018", duration: 88},
				]
			},
			{
				name: "HTML5 Game",
				technologies: ["JS", "HTML", "CSS"],
				days: [
					{deadline: "11 listopada 2018", duration: 23},
				]
			}
		]
	}

}

class Aggregate extends Component {
	render() {
		return (
			<div style={{...defaultStyle, margin: "2%"}}>
				<h2>{this.props.projects.length} Pending Projects</h2>
			</div>
		)
	}
} 

class Filter extends Component {
	render() {
		return (
			<div style={defaultStyle}>
				<img/>
				<input type="text" onKeyUp={event => this.props.onTextChange(event.target.value)}/>
			</div>
		)	
	}
}

class ProjectGenerator extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.project.name}</h3>

				<p>Bear claw gingerbread pie cheesecake topping cookie chocolate cake. Tootsie roll carrot cake fruitcake marzipan cheesecake chocolate cake.Donut chocolate cake danish halvah fruitcake lollipop cake topping. Jelly-o bear claw pie sugar plum pudding chocolate bar gingerbread cotton candy pudding. Cake topping marshmallow. Powder gingerbread muffin sesame snaps cookie danish. Pudding candy croissant icing jujubes candy canes soufflé lemon drops biscuit. Macaroon sesame snaps tiramisu carrot cake. </p>
			</div>
			
		)
	}
} 

class DaysCounter extends Component {
	render() {
		let projects = this.props.projects
		let allDays = projects.reduce((days, eachProject) => {
			return days.concat(eachProject.days)
		}, [])
		let totalDuration = allDays.reduce((sum, eachDay) => {
			return sum + eachDay.duration
		}, 0)
		return (
			<div>
				<h2>{Math.round(totalDuration/60)} Days</h2>
				<ul>{projects.map(deadline =>
					<li>{deadline.name}</li>
				)}
				</ul>
			</div>
		
		) 
	}
} 

export default class Projects extends Component {
	constructor() {
		super()
		this.state = {
			serverData: {},
			filterString: ""
		}
	}

	componentDidMount() {
		setTimeout(() =>{
			this.setState({serverData: fakeServerData})
		}, 1000)
	}

	render() {
		let playlistToRender = this.state.serverData.user ?this.state.serverData.user.projects.filter(project =>
			project.name.toLowerCase().includes(
				this.state.filterString.toLowerCase())
		) : []
		return	(
			<div className="container-fluid text-center" style={{"margin": "1%"}}>
				{this.state.serverData.user	?
					<div>
						<h1 style={{...defaultStyle, "font-size": "54px"}}>		
							{this.state.serverData.user.name}'s projects
						</h1>
						<Aggregate projects={playlistToRender}/>
						<Filter onTextChange={text => this.setState({filterString: text})}/>
						{playlistToRender.map(project =>
							<div style={{"width": "40%","float": "left", "margin": "5%", "text-align": "justify"}}>
								<ProjectGenerator project={project}/>
								<div className="container-fluid text-center">
									<DaysCounter projects={playlistToRender}/>
								</div>
							</div>
						)}

					</div> : "Loading..."
				}
			</div>
		)
	}
}


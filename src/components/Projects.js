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
					{duration: 9322},
					{duration: 1234},
					{duration: 6669}
				]
			},
			{
				name: "Weather App",
				technologies: ["JS", "HTML", "CSS"],
				days: [
					{duration: 9322},
					{duration: 1234},
					{duration: 6669}
				]
			},
			{
				name: "React CMS",
				technologies: ["JS", "React", "HTML", "Bootstrap"],
				days: [
					{duration: 9322},
					{duration: 1234},
					{duration: 6669}
				]
			},
			{
				name: "HTML5 Game",
				technologies: ["JS", "HTML", "CSS"],
				days: [
					{duration: 9322},
					{duration: 1234},
					{duration: 6669}
				]
			}
		]
	}

}


class Project extends Component {
	render() {
		return (
			<div className="row" >
				<h3>Project 1</h3>
				<div className="col-md-5">
					<p>Bear claw gingerbread pie cheesecake topping cookie chocolate cake. Tootsie roll carrot cake fruitcake marzipan cheesecake chocolate cake.Donut chocolate cake danish halvah fruitcake lollipop cake topping. Jelly-o bear claw pie sugar plum pudding chocolate bar gingerbread cotton candy pudding. Cake topping marshmallow. Powder gingerbread muffin sesame snaps cookie danish. Pudding candy croissant icing jujubes candy canes soufflé lemon drops biscuit. Macaroon sesame snaps tiramisu carrot cake. </p>
								
					<br/><br/><br/><br/>
				</div>
			</div>
			
		)
	}
} 


export default class Projects extends Component {
	constructor() {
		super()
		this.state = {serverData: {}}
	}

	componentDidMount() {
		setTimeout(() =>{
			this.setState({serverData: fakeServerData})
		}, 1000)
	}
	
	render() {
		/*let timeToEnd = this.props.projects.reduce((days, eachProject) => {
			return days.concat(eachProject.days)
		}, [])
		let totalTimeToFinish = */
		return	(
			<div className="container-fluid text-center" style={{"margin": "1%"}}>
				{this.state.serverData.user	?
					<div>
						<h1 style={{...defaultStyle, "font-size": "54px"}}>		
							{this.state.serverData.user.name}'s projects
						</h1>
						<h2>		
							{this.state.serverData.user.projects.length} Projects
						</h2>
						<br/><br/><br/><br/>

						<div className="row" >
				<h3>Project 1</h3>
				<div className="col-md-5">
					<p>Bear claw gingerbread pie cheesecake topping cookie chocolate cake. Tootsie roll carrot cake fruitcake marzipan cheesecake chocolate cake.Donut chocolate cake danish halvah fruitcake lollipop cake topping. Jelly-o bear claw pie sugar plum pudding chocolate bar gingerbread cotton candy pudding. Cake topping marshmallow. Powder gingerbread muffin sesame snaps cookie danish. Pudding candy croissant icing jujubes candy canes soufflé lemon drops biscuit. Macaroon sesame snaps tiramisu carrot cake. </p>
								
					<br/><br/><br/><br/>
				</div>
			</div>
			
						
						{this.state.serverData.user.projects.map(project =>
							<Projects />	
						)}
						
					</div> : "Loading..."
				}
			</div>
		)
	}
}


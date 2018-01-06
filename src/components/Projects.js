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
				days: [{duration: 7}]
			},
			{
				name: "Weather App", duration: 10,
				technologies: ["JS", "HTML", "CSS"],
				days: [{duration: 10}]
			},
			{
				name: "React CMS", duration: 12,
				technologies: ["JS", "React", "HTML", "Bootstrap"],
				days: [{duration: 12}]
			},
			{
				name: "HTML5 Game", duration: 16,
				technologies: ["JS", "HTML", "CSS"],
				days: [{duration: 16}]
			}
		]
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
		let timeToEnd = this.props.projects.reduce((days, eachProject) => {
			return days.concat(eachProject.days)
		}, [])
		/*let totalTimeToFinish = */
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
								<h2>		
									{timeToEnd.length} days
								</h2>
								<br/><br/><br/><br/>
							</div>
							
							<h3>Project 2</h3>
							<div className="col-md-5">
								<p>Bear claw gingerbread pie cheesecake topping cookie chocolate cake. Tootsie roll carrot cake fruitcake marzipan cheesecake chocolate cake.Donut chocolate cake danish halvah fruitcake lollipop cake topping. Jelly-o bear claw pie sugar plum pudding chocolate bar gingerbread cotton candy pudding. Cake topping marshmallow. Powder gingerbread muffin sesame snaps cookie danish. Pudding candy croissant icing jujubes candy canes soufflé lemon drops biscuit. Macaroon sesame snaps tiramisu carrot cake. </p>
								<h2>		
									{timeToEnd.length} days
								</h2>
							</div>
							<h3>Project 3</h3>
							<div className="col-md-5">
								<p>Bear claw gingerbread pie cheesecake topping cookie chocolate cake. Tootsie roll carrot cake fruitcake marzipan cheesecake chocolate cake.Donut chocolate cake danish halvah fruitcake lollipop cake topping. Jelly-o bear claw pie sugar plum pudding chocolate bar gingerbread cotton candy pudding. Cake topping marshmallow. Powder gingerbread muffin sesame snaps cookie danish. Pudding candy croissant icing jujubes candy canes soufflé lemon drops biscuit. Macaroon sesame snaps tiramisu carrot cake. </p>
								<h2>		
									{timeToEnd.length} days
								</h2>
							</div>
							<h3>Project 4</h3>
							<div className="col-md-5">
								<p>Bear claw gingerbread pie cheesecake topping cookie chocolate cake. Tootsie roll carrot cake fruitcake marzipan cheesecake chocolate cake.Donut chocolate cake danish halvah fruitcake lollipop cake topping. Jelly-o bear claw pie sugar plum pudding chocolate bar gingerbread cotton candy pudding. Cake topping marshmallow. Powder gingerbread muffin sesame snaps cookie danish. Pudding candy croissant icing jujubes candy canes soufflé lemon drops biscuit. Macaroon sesame snaps tiramisu carrot cake. </p>
								<h2>		
									{timeToEnd.length} days
								</h2>
							</div>
						</div>
					</div> : "Loading..."
				}
			</div>
		)
	}
}
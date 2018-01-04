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
				technologies: ["HTML", "PHP", "CSS", "jQuery"]
			},
			{
				name: "Weather App",
				technologies: ["JS", "HTML", "CSS"]
			},
			{
				name: "React CMS",
				technologies: ["JS", "React", "HTML", "Bootstrap"]
			},
			{
				name: "HTML5 Game",
				technologies: ["JS", "HTML", "CSS"]
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
		let allProjects = this.props.projects.reduce((projects, eachProject) => {	
		}, [])
		let totalTimeToFinish
		return(
			<div className="container-fluid text-center">
				{this.state.serverData.user	?
					<div>
						<h1 style={{...defaultStyle, "font-size": "54px"}}>		
							{this.state.serverData.user.name}'s projects
						</h1>
						<h2>		
							{this.state.serverData.user.projects.length} Projects
						</h2>
						<br/><br/><br/><br/>
				
						<div className="row">	
							<h3>Project 1</h3>
							<div className="col-md-5">
								<p>Bear claw gingerbread pie cheesecake topping cookie chocolate cake. Tootsie roll carrot cake fruitcake marzipan cheesecake chocolate cake.Donut chocolate cake danish halvah fruitcake lollipop cake topping. Jelly-o bear claw pie sugar plum pudding chocolate bar gingerbread cotton candy pudding. Cake topping marshmallow. Powder gingerbread muffin sesame snaps cookie danish. Pudding candy croissant icing jujubes candy canes soufflé lemon drops biscuit. Macaroon sesame snaps tiramisu carrot cake. </p>
							</div>

							<h3>Project 2</h3>
							<div className="col-md-5">
								<p>Bear claw gingerbread pie cheesecake topping cookie chocolate cake. Tootsie roll carrot cake fruitcake marzipan cheesecake chocolate cake.Donut chocolate cake danish halvah fruitcake lollipop cake topping. Jelly-o bear claw pie sugar plum pudding chocolate bar gingerbread cotton candy pudding. Cake topping marshmallow. Powder gingerbread muffin sesame snaps cookie danish. Pudding candy croissant icing jujubes candy canes soufflé lemon drops biscuit. Macaroon sesame snaps tiramisu carrot cake. </p>
							</div>
         
							<h3>Project 3</h3>
							<div className="col-md-5">
								<p>Bear claw gingerbread pie cheesecake topping cookie chocolate cake. Tootsie roll carrot cake fruitcake marzipan cheesecake chocolate cake.Donut chocolate cake danish halvah fruitcake lollipop cake topping. Jelly-o bear claw pie sugar plum pudding chocolate bar gingerbread cotton candy pudding. Cake topping marshmallow. Powder gingerbread muffin sesame snaps cookie danish. Pudding candy croissant icing jujubes candy canes soufflé lemon drops biscuit. Macaroon sesame snaps tiramisu carrot cake. </p>
							</div>

							<h3>Project 4</h3>
							<div className="col-md-5">
								<p>Bear claw gingerbread pie cheesecake topping cookie chocolate cake. Tootsie roll carrot cake fruitcake marzipan cheesecake chocolate cake.Donut chocolate cake danish halvah fruitcake lollipop cake topping. Jelly-o bear claw pie sugar plum pudding chocolate bar gingerbread cotton candy pudding. Cake topping marshmallow. Powder gingerbread muffin sesame snaps cookie danish. Pudding candy croissant icing jujubes candy canes soufflé lemon drops biscuit. Macaroon sesame snaps tiramisu carrot cake. </p>
							</div>
						</div>
					</div> : "Loading..."
				}
			</div>
		)
	}
}
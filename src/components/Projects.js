import React, { Component } from 'react';
import '../App.css';

let defaultStyle = {
	color: '#fff',
};

let fakeServerData = {
	user: {
		name: 'User',
		projects: [
			{
				name: 'Wordpress Site',
				technologies: ['HTML', 'PHP', 'CSS', 'jQuery'],
				days: [
					{deadline: '11 listopada 2018', duration: 93},
				]
			},
			{
				name: 'Weather App',
				technologies: ['JS', 'HTML', 'CSS'],
				days: [
					{deadline: '11 listopada 2018', duration: 69},
				]
			},
			{
				name: 'React CMS',
				technologies: ['JS', 'React', 'HTML', 'Bootstrap'],
				days: [
					{deadline: '11 listopada 2018', duration: 88},
				]
			},
			{
				name: 'HTML5 Game',
				technologies: ['JS', 'HTML', 'CSS'],
				days: [
					{deadline: '11 listopada 2018', duration: 23},
				]
			}
		]
	}

};

function Aggregate( {projects} ) { 
	return (
		<div style={{...defaultStyle, margin: '2%'}}>
			<h2>{projects.length} Pending Projects</h2>
		</div>
	);
}

function Filter( {onTextChange} ) {
	return (
		<div style={defaultStyle}>
			<img/>
			<input type="text" onKeyUp={event => onTextChange(event.target.value)}/>
		</div>
	);	
}

function ProjectGenerator( {project} ) {
	return (
		<div>
			<h3>{project.name}</h3>
			<p>Bear claw gingerbread pie cheesecake topping cookie chocolate cake. Tootsie roll carrot cake fruitcake marzipan cheesecake chocolate cake.Donut chocolate cake danish halvah fruitcake lollipop cake topping. Jelly-o bear claw pie sugar plum pudding chocolate bar gingerbread cotton candy pudding. Cake topping marshmallow. Powder gingerbread muffin sesame snaps cookie danish. Pudding candy croissant icing jujubes candy canes soufflé lemon drops biscuit. Macaroon sesame snaps tiramisu carrot cake. </p>
		</div>
			
	);
} 

function DaysCounter( {projects} ) {
	let allDays = projects.reduce((days, eachProject) => {
		return days.concat(eachProject.days);
	}, []);
	let totalDuration = allDays.reduce((sum, eachDay) => {
		return sum + eachDay.duration;
	}, 0);
	let totalDurationDays = Math.round(totalDuration/60);
	let isTooLow = totalDurationDays < 10;
	let daysCounterStyle = {
		color: isTooLow ? 'crimson' : 'white'
	};
	return (
		<div style={daysCounterStyle}>
			<h2>{totalDurationDays} Days</h2>
			<ul>{projects.map(deadline =>
				<li>{deadline.name}</li>
			)}
			</ul>
		</div>
		
	); 
} 

export default class Projects extends Component {
	constructor() {
		super();
		this.state = {
			serverData: {},
			filterString: ''
		};
	}

	componentDidMount() {
		setTimeout(() =>{
			this.setState({serverData: fakeServerData});
		}, 1000);
	}

	render() {
		let projectToRender = this.state.serverData.user ?
			this.state.serverData.user.projects.filter(project =>
				project.name.toLowerCase().includes(
					this.state.filterString.toLowerCase())
			) : [];
		let userNameStyle = {...defaultStyle, 'font-size': '54px'};
		let projectGeneratorStyle = {
			'width': '40%',
			'float': 'left', 
			'margin': '5%', 
			'text-align': 'justify',
			'background': this.props.index % 2 ? '' : '#808080'
		};
		
		return	(
			<div className="container-fluid text-center" style={{'margin': '1%'}}>
				{this.state.serverData.user	?
					<div>
						<h1 style={userNameStyle}>		
							{this.state.serverData.user.name}'s projects
						</h1>
						<Aggregate projects={projectToRender}/>
						<Filter onTextChange={text => this.setState({filterString: text})}/>
						{projectToRender.map((project, i) => 
							<div style={projectGeneratorStyle}>
								<ProjectGenerator project={project} index={i}/>
								<div className="container-fluid text-center">
									<DaysCounter projects={projectToRender}/>
								</div>
							</div>
						)}

					</div> : 'Loading...'
				}
			</div>
		);
	}
}


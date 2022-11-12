class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Hello',
		};
		// Change code below this line

		// Change code above this line
	}
	handleClick() {
		this.setState({
			text: 'You clicked!',
		});
	}
	render() {
		return (
			<div>
				{/* Change code below this line */}
				<button>Click Me</button>
				{/* Change code above this line */}
				<h1>{this.state.text}</h1>
			</div>
		);
	}
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));

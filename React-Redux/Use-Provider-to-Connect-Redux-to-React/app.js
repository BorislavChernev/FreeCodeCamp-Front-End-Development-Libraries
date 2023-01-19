// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
	return {
		type: ADD,
		message,
	};
};

const messageReducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			return [...state, action.message];
		default:
			return state;
	}
};

const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			messages: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.submitMessage = this.submitMessage.bind(this);
	}
	handleChange(event) {
		this.setState({
			input: event.target.value,
		});
	}
	submitMessage() {
		const currentMessage = this.state.input;
		this.setState({
			input: '',
			messages: this.state.messages.concat(currentMessage),
		});
	}
	render() {
		return (
			<div>
				<h2>Type in a new Message:</h2>
				<input value={this.state.input} onChange={this.handleChange} />
				<br />
				<button onClick={this.submitMessage}>Submit</button>
				<ul>
					{this.state.messages.map((message, idx) => {
						return <li key={idx}>{message}</li>;
					})}
				</ul>
			</div>
		);
	}
}

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<DisplayMessages />
			</Provider>
		);
	}
}

ReactDOM.render(<AppWrapper />, document.getElementById('root'));

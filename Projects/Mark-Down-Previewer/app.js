const initialMarkdown = `
### Headers
  
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List ______

- First Item
- Second Item
- Third Item

### Links

[FreeCodeCamp](https://www.freecodecamp.org)

[My Personal Portfolio](http://personalportfoliowebsiteborislavchernev.free.bg/)

### Text Decorations

**bold**

*italic*

***bold and italic***

### Images

![alt text](https://cdn.discordapp.com/attachments/803157757984636949/1051733490770640937/258974879_1024471358128200_3355150667623309807_n.jpg 'BBMicroWorlds Iceland #1')
![alt text](https://cdn.discordapp.com/attachments/803157757984636949/1051733904006066266/264078880_123788786767622_1823215347806752582_n.jpg 'BBMicroWorlds IceBerg #3')

### Blockquote

> "One day these early mornings, these late nights, will pay off."
> -- @Success Gems

> "When someone shows you their true colors, don't try to paint a different picture"
> -- @Classy Quotes

### Code Block

\`npm init\`
\`npm install\`
\`npm install react-redux\`

\`\`\`
import { getUserData } from '../util.js';

const host = 'http://localhost:3030';

async function request(method, url, data) {
	let options = {
		method,
		headers: {},
	};

	if (data !== undefined) {
		options.headers['Content-Type'] = 'application/json';
		options.body = JSON.stringify(data);
	}

	const user = getUserData();

	if (user) {
		options.headers['X-Authorization'] = user.accessToken;
	}

	try {
		const response = await fetch(host + url, options);

		if (response.status == 204) {
			return Response;
		}

		const result = await response.json();

		if (response.ok == false) {
			throw new Error(result.message);
		}

		return result;
	} catch (err) {
		alert(err.message);
		throw err;
	}
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');

\`\`\`
`;
var renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
	return `<a href=${href} target="_blank">${text}</a>`;
};

marked.setOptions({
	renderer,
	highlight: function (code) {
		return hljs.highlightAuto(code).value;
	},
	breaks: true,
});

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			markdown: initialMarkdown,
		};
	}

	handleChange = (e) => this.setState({ markdown: e.target.value });

	render() {
		return (
			<div>
				<h1>Markdown Previewer</h1>
				<h3 id="edit-tab">
					<i class="fas fa-code"></i> Edit
				</h3>
				<h3 id="preview-tab">
					<i class="far fa-eye"></i> Preview
				</h3>
				<div className="container">
					<div className="left">
						<textarea
							id="editor"
							value={this.state.markdown}
							onChange={this.handleChange}
						/>
					</div>
					<div className="right">
						<div
							id="preview"
							dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
						></div>
					</div>
				</div>
				<footer className="text-center">Made with 💗</footer>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

import React, { Component } from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";

import "./styles.css";
// Convert your App component from a functional component to a stateful component.

// Removed unneeded additional ids
const renderNameTag = (name) => <NameTag name={name} key={name} />;

// Added the class component (same w/ the line 1 import React)
class App extends Component {
	// Added state replacing the need of the previous data.js file array via names array
	state = { names: ["Bill", "Jim", "Jesus", "Mohammed", "Ziva"] }

	// Added render & placed all the material / return w/i
	render () {
		const NameTagElements = this.state.names.map(renderNameTag);

		return (
			<div className="App">
				<h1>Name Tag Generator</h1>
				{NameTagElements};
			</div>
		);
	}
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

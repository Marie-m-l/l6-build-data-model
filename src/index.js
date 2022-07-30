import React, { Component } from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import { nameData } from "./data.js";

import "./styles.css";

const renderNameTag = (name) => <NameTag name={name.person} key={name.id} />;
// Convert your App component from a functional component to a stateful component.
class App extends Component {
	const App = () => {
		state = {value: 0 };
		const NameTagElements = nameData.map(renderNameTag);

		render () {
			return (
				<div className="App">
					<h1>Name Tag Generator</h1>
					{NameTagElements};
				</div>
			);
		}:
	};
};


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

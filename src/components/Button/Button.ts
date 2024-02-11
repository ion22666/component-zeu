import { Component } from "../../lib/Component";
import "./styles/Button.scss";

export class Button extends Component {
	nodeName = "ZButton";
	params = {
		tooltip: "",
	};
	render() {
		this.el.innerHTML = `
			${this.el.innerHTML}
		`;
		this.el.classList.add("z-button");
		this.params.tooltip;
	}
}

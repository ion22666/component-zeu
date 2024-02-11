import { components } from "./components";
import "./styles/global.scss";

components.forEach((C) => document.createElement(new C().nodeName));

window.onload = () => {
	components.forEach((C) => {
		document.querySelectorAll<HTMLUnknownElement>(new C().nodeName).forEach((el) => new C().mount(el));
	});
};

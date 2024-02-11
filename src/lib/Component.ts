export abstract class Component {
	abstract nodeName: string;
	abstract params: { [key: string]: string | null };
	el!: HTMLUnknownElement;

	mount(element: HTMLUnknownElement) {
		this.el = element;
		for (const paramName in this.params) {
			if (paramName && Object.prototype.hasOwnProperty.call(this.params, paramName)) {
				this.params[paramName] = this.el.getAttribute(paramName);
			}
		}
		this.render();
		this.afterMount && this.afterMount();
	}
	abstract render(): void;
	afterMount?(): void;
}

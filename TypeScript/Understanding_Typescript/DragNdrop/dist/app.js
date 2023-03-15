"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterend', this.element);
    }
}
const projectInput = new ProjectInput();
//# sourceMappingURL=app.js.map
const TestDocumentRequester = require("./requesters/TestDocumentRequester");

class DependencyManager {
  #dependencies = {
    DocumentRequester: new TestDocumentRequester(),
  };

  setDependency(dependencyName, dependency) {
    this.#dependencies[dependencyName] = dependency;
  }

  getDependency(dependencyName) {
    return this.#dependencies[dependencyName];
  }
}

module.exports = new DependencyManager();

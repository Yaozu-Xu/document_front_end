const TestDocumentRequester = require("./requesters/TestDocumentRequester");

class DependencyManager {
  #dependencies = {
    DocumentRequester: new TestDocumentRequester(),
  };

  getDependency(dependencyName) {
    return this.#dependencies[dependencyName];
  }
}

module.exports = new DependencyManager();

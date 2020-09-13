class DependencyManager {
  #dependencies = {};

  getDependency(dependencyName) {
    return this.#dependencies[dependencyName];
  }
}

module.exports = new DependencyManager();

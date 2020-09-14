const DependencyManager = require("./DependencyManager");

describe("DependencyManager", () => {
  test("DepenedencyManager should be a object", () => {
    expect(DependencyManager).toEqual(expect.any(Object));
  });
  test("setDependency should return dependency if it exists", () => {
    const testDependencyName = "TestDependencyName";
    const testDependency = "TestDependency";

    DependencyManager.setDependency(testDependencyName, testDependency);

    const dependency = DependencyManager.getDependency(testDependencyName);
    expect(dependency).toBe(testDependency);
  });
});

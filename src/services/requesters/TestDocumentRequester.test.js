const TestDocumentRequester = require("./TestDocumentRequester");

const testDocumentRequester = new TestDocumentRequester();

class TestTestDocumentRequester extends TestDocumentRequester {
  getDocumentById = jest.fn();
}

describe("TestDocumentRequester", () => {
  test("getRootDocumentIds should return all root ids", () => {
    const rootDocumentIds = testDocumentRequester.getRootDocumentIds();
    rootDocumentIds.forEach((id) => expect(id).toEqual(expect.any(Number)));
  });
  test("getDocumentById should return document by id", () => {
    const document = testDocumentRequester.getDocumentById(0);
    expect(document).toMatchObject({
      content: "title-0",
      children: [5, 6, 7, 8],
      title: "title-0",
      language: "en-GB-oed",
    });
  });
  test("getAllDocumentsByIds should call getDocumentById with ids", () => {
    const testTestDocumentRequester = new TestTestDocumentRequester();
    const testIds = [0, 1, 2, 3];
    testTestDocumentRequester.getAllDocumentsByIds(testIds);

    const { calls } = testTestDocumentRequester.getDocumentById.mock;

    expect(calls).toHaveLength(testIds.length);
    calls.forEach((call) => expect(testIds).toContain(call[0]));
  });
});

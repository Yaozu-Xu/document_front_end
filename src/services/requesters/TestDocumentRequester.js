class TestDocumentRequester {
  #rootDocumentIds = [0, 1, 2, 3, 4];

  #documentsList = [
    {
      content: "title-0",
      children: [5, 6, 7, 8],
    },
    {
      content: "title-1",
      children: [5, 6, 7, 8],
    },
    {
      content: "title-2",
      children: [5, 6, 7, 8],
    },
    {
      content: "title-3",
      children: [5, 6, 7, 8],
    },
    {
      content: "title-4",
      children: [5, 6, 7, 8],
    },
    {
      content: "subcontent-5",
      children: [],
    },
    {
      content: "subcontent-6",
      children: [],
    },
    {
      content: "subcontent-7",
      children: [],
    },
    {
      content: "subcontent-8",
      children: [],
    },
  ];

  getRootDocumentIds() {
    return this.#rootDocumentIds;
  }

  getAllDocumentsByIds(ids) {
    return ids.map((id) => this.getDocumentById(id));
  }

  getDocumentById(id) {
    const document = this.#documentsList[id];
    return {
      ...document,
      title: document.content,
      language: "en-GB-oed",
    };
  }
}

module.exports = TestDocumentRequester;

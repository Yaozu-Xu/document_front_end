class TestDocumentRequester {
  #rootDocumentIds = [0, 1, 2, 3, 4];

  #documentsList = [
    {
      title: "title-0",
      content: "content-0",
      children: [5, 6, 7, 8],
    },
    {
      title: "title-1",
      content: "content-1",
      children: [5, 6, 7, 8],
    },
    {
      title: "title-2",
      content: "content-2",
      children: [5, 6, 7, 8],
    },
    {
      title: "title-3",
      content: "content-3",
      children: [5, 6, 7, 8],
    },
    {
      title: "title-4",
      content: "content-4",
      children: [5, 6, 7, 8],
    },
    {
      title: "subtitle-5",
      content: "subcontent-5",
      children: [],
    },
    {
      title: "subtitle-6",
      content: "subcontent-6",
      children: [],
    },
    {
      title: "subtitle-7",
      content: "subcontent-7",
      children: [],
    },
    {
      title: "subtitle-8",
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
      language: "en-GB-oed",
    };
  }
}

module.exports = TestDocumentRequester;

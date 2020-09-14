import disableTestPagesInProduction from "./disableTestPagesInProduction";

describe("disableTestPagesInProduction", () => {
  test("it should only call next with 404 status code in production mode", () => {
    const req = jest.fn();
    const res = jest.fn();
    const next = jest.fn();

    process.env.NODE_ENV = "production";

    disableTestPagesInProduction(req, res, next);

    expect(req.mock.calls).toHaveLength(0);
    expect(res.mock.calls).toHaveLength(0);
    expect(next.mock.calls).toHaveLength(1);

    expect(next.mock.calls[0][0]).toMatchObject({ statusCode: 404 });
  });

  test("it should only call next with nothing in development mode", () => {
    const req = jest.fn();
    const res = jest.fn();
    const next = jest.fn();

    process.env.NODE_ENV = "development";

    disableTestPagesInProduction(req, res, next);

    expect(req.mock.calls).toHaveLength(0);
    expect(res.mock.calls).toHaveLength(0);
    expect(next.mock.calls).toHaveLength(1);

    expect(next.mock.calls[0]).toHaveLength(0);
  });
});

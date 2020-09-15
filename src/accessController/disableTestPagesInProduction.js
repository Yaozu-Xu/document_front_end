export default function disableTestPagesInProduction(req, res, next) {
  if (process.env.NODE_ENV !== "development") {
    next({ statusCode: 404, message: "not found" });
  } else {
    next();
  }
}

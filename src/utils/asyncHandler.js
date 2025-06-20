const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(req, res, next).catch((error) => next(error));
  };
};

export { asyncHandler };

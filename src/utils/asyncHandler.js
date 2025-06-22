const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(req, res, next).catch((error) => next(error));
  };
};

export { asyncHandler };

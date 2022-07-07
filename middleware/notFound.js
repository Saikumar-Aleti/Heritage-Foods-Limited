const notFoundMiddleware = (req, res) => {
  res
    .status(404)
    .send(
      `<h3 style="font-style : italic">The resource you're looking for doesn't exist!</h3>`
    );
};
module.exports = { notFoundMiddleware };

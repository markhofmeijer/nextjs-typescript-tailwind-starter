module.exports = {
  async rewrites() {
    return [
      {
        source: "/rewrite",
        destination: "/",
      },
    ]
  },
}

module.exports = (req, res) => {
  const err = new Error('Not Found')
  err.status = 404
  res.send({
    error: 'page Not found'
  })
}
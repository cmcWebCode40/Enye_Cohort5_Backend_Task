const appLog = (port) => console.log(`Server Listening to  port ${port}`);

module.exports = (app) => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, appLog(PORT))
}
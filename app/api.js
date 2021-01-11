const exchangeRates = require('../api/exchangerates')
const homePage = require('../api/other')
const errorPage = require('../middleware/notFound')



module.exports = (app) => {
  app.use('/', homePage)
  app.use('/api/rates', exchangeRates)
  app.use(errorPage)
}
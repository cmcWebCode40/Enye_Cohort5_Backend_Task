const {
  default: axios
} = require("axios");
const exchangeList = require("../../utils/exchangeAbrv");
const ratesValidator = require("../../validation/exchangeRates");
const moment = require('moment')


module.exports = async (req, res) => {
  try {
    const {
      error,
      value
    } = ratesValidator(req.query)

    if (error) return res.status(422).send({
      message: error.details[0].message
    });
    const {
      base,
      currency
    } = value
    const currencyList = currency.split(',')
    const validateCurrencies = exchangeList.includes(...currencyList)
    const validateBase = exchangeList.includes(base)
    if (!validateBase) return res.status(422).send({
      message: `base '${base}' is not supported`
    });
    if (!validateCurrencies) return res.status(422).send({
      message: `currency(s) '${currency}' is not supported`
    });

    const AllExhangeRates = await axios.get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currencyList}`)
    const {
      data: {
        rates,

      }
    } = AllExhangeRates
    const date = moment().format("YYYY-MM-DD")


    res.send({
      results: {
        base,
        date,
        rates
      }
    })
  } catch (error) {
    return res.status(500).send({
      error: 'Internal Server Error'
    });
  }
}
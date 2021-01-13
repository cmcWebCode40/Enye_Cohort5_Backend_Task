const {
  default: axios
} = require("axios");
const moment = require('moment')
const exchangeList = require("../../utils/exchangeAbrv");
const ratesValidator = require("../../validation/exchangeRates");



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
      message: `base '${base}' is not supported, use UpperCase instead (e.g ${base.toUpperCase()})`
    });
    if (!validateCurrencies) return res.status(422).send({
      message: `currency(s) '${currency}' is not supported, use UpperCase instead (e.g ${currency.toUpperCase()})`
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
    if (error && error.response) {
      const {
        response: {
          data,
          status
        }
      } = error
      return res.status(status).send({
        error: data.error
      });
    }
    return res.status(500).send({
      error: 'Internal Server Error'
    });
  }
}
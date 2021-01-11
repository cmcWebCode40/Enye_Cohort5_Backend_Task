const joi = require('@hapi/joi')

const queryObject = () => ({
  currency: joi.string().required().label('currency is required (e.g EUR,GBP,USD)'),
  base: joi.string().required().label('base is required (e.g EUR)'),
})

const ratesValidator = (query) => {
  const data = queryObject()
  return joi.object().keys(data).validate(query)
}


module.exports = ratesValidator
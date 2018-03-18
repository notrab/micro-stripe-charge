const { json, send } = require('micro')
const { router, post } = require('microrouter')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports = router(
  post('/', async (req, res) => {
    const data = await json(req)

    try {
      const { status } = await stripe.charges.create(data)

      send(res, 200, { status })
    } catch (e) {
      console.log(e)
      send(res, 500, { message: e.message })
    }
  })
)

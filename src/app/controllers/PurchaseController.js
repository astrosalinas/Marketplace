const Ad = require('../models/Ad')
const User = require('../models/User')
const Mail = require('../services/Mail')

class PurchaseController {
  async store (req, res) {
    const { ad, content } = req.body

    const pucharseAd = await Ad.findById(ad).populate('author')
    const user = await User.findById(req.userId)

    await Mail.sendMail({
      from: '"Fernando salinas" <astrosalinas35@gmail.com>',
      to: pucharseAd.author.email,
      subject: `Solicitacion de Compra: ${pucharseAd.title}`,
      html: `<p>Test: ${content}</p>`
    })

    return res.send()
  }
}

module.exports = new PurchaseController()

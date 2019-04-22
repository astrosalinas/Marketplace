const Ad = require('../models/Ad')

class AdController {
  async index (req, res) {
    const filters = {}

    if (req.query.price_min || req.query.price_max) {
      filters.price = {}

      if (req.query.price_min) {
        filters.price.$gte = req.query.price_min
      }

      if (req.query.price_max) {
        filters.price.$lte = req.query.price_max
      }
    }

    if (req.query.title) {
      filters.title = new RegExp(req.query.title, 'i')
    }

    const ads = await Ad.paginate(filters, {
      page: req.query.page || 1,
      limit: 20,
      populate: ['author'],
      sort: '-createdAt'
    })

    return res.json(ads)
  }

  async show (req, res) {
    const ad = await Ad.findById(req.params.id)

    return res.json(ad)
  }

  async store (req, res) {
    try {
      const ad = await Ad.create({ ...req.body, author: req.userId })
      return res.json(ad)
    } catch (err) {
      const error = Object.keys(err.errors)

      if (error[0]) {
        return res.status(400).json({ error: err.errors[error[0]].message })
      } else {
        return res.status(400).json({ error: 'Error in format' })
      }
    }
  }

  async update (req, res) {
    const ad = await Ad.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    if (ad) {
      return res.json(ad)
    }

    return res.json({ error: 'Invalid' })
  }

  async destroy (req, res) {
    await Ad.findOneAndDelete({ _id: req.params.id })

    return res.send()
  }
}

module.exports = new AdController()

const Mail = require('../services/Mail')

class PurchaseMail {
  get key () {
    return 'PurchaseMail'
  }

  async handle (job, done) {
    const { ad, user, content } = job.data
    await Mail.sendMail({
      from: '"Fernando salinas" <astrosalinas35@gmail.com>',
      to: ad.author.email,
      subject: `Solicitacion de Compra: ${ad.title}`,
      template: 'purchase',
      context: {
        user,
        content,
        ad
      }
    })

    return done()
  }
}

module.exports = new PurchaseMail()

'use strict'

const Wreck = require('wreck')

module.exports = function googleTester (cb) {
  Wreck.get('https://google.com/', (err, res, payload) => {
    cb({
      res,
      payload,
      isOk: !err && res.statusCode < 500
    })
  })
}

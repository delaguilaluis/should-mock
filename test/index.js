'use strict'

const test = require('tape')
const nock = require('nock')
const shouldMock = require('./should-mock')
const googleTester = require('../')

test('Google tester', (t) => {
  t.test('When google is up', (q) => {
    q.plan(1)

    shouldMock && nock('https://google.com')
      .get('/')
      .reply(200)

    googleTester(result => {
      q.ok(result.isOk)
    })
  })

  t.test('When google is down', (q) => {
    q.plan(1)

    nock('https://google.com')
      .get('/')
      .reply(503)

    googleTester(result => {
      q.notOk(result.isOk)
    })
  })
})

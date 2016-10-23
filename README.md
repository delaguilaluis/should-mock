# Nock Error Responses

A testing example for turning off [Nock](https://github.com/node-nock/nock)'s
mocks programmatically.

This project aims to enable a 'switch' mechanism between running tests over real
servers (Google) and mocked responses. 

# Usage

By setting the `MOCKING` environment variable to `false`, the tests will hit the
real servers*. Otherwise it would mock all the responses.

*Mocks of error responses ignore the value of `MOCKING` and will always be
enabled.

## Try it

- `npm test`
- `MOCKING=false npm test` (turn your WiFi off if you wanna see it failing)
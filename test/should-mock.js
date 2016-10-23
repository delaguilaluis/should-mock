module.exports = !(process.env.MOCKING &&
    process.env.MOCKING.toLowerCase() === 'false')

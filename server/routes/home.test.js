const { run } = require('./home')

jest.mock('../schema.js', () => {
    Message: {
        save: jest.fn()
    }
})

describe('Home Page', () => {
    test('Run is called correctly', async () => {
        const req = {body: {name: 'Test', message: "testMessage", country: "testCountry", added: new Date()}}
        const res = {}
        expect(run).toHaveBeenCalledWith()
    })
})
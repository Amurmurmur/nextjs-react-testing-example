import { authResponse } from '../../lib/data'

test('Auth response should be AuthResponseObject', () => {
    expect(authResponse()).toEqual({
        userId: 1,
        userName: 'testuser',
        email: 'test@test.com',
        token: '12345'
    })
})
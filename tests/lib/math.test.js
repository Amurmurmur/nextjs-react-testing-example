import { addNumbers, divideNumbers } from '../../lib/math'

test('Adds 3 + 5 to equal 8', () => {
    expect(addNumbers(3,5)).toBe(8)
})

test('Divide 12 by 6 to equal 2', () => {
    expect(divideNumbers(12,6)).toBe(2)
})
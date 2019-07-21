import { computeSessionTime, filterArrayOfObjects, convertDate } from './functions'

describe('Functions test', () => {
    test('functio computeSessionTime', () => {
        // Functions are triggered at different times
        expect(computeSessionTime(30)).toBeLessThan(new Date(Date.now() + 30*60000).getTime())
    })

    test('function filterArrayOfObjects', () => {
        const givenArr = [{'id': 1, 'name': "John"}, {'id': 2, 'name': "Karen"}, {'id': 1, 'name': "John"}];
        const expectedArr = [{'id': 1, 'name': "John"}, {'id': 2, 'name': "Karen"}];
        expect(filterArrayOfObjects(givenArr, 'id')).toEqual(expectedArr);
    })
    
    test('function convertDate', () => {
        expect(convertDate('2019-07-19T00:00:00')).toBe('19 Jul 2019');
    })
})
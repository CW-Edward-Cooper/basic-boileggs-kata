import {persistence} from './persistentbuggerkata';

describe('Given persistence function', () => {

    test('When input 3 then return 0', () => {
       expect(persistence(0)).toBe(0)
    });

    test('When input 1 then return 0', () => {
        expect(persistence(1)).toBe(0)
    });

    test('When input 2 then return 0', () => {
        expect(persistence(2)).toBe(0)
    });

    test('When input is 10 then return 1', () =>{
        expect(persistence(10)).toBe(1)
    })

    test('When input is 11 then return 1', () =>{
        expect(persistence(11)).toBe(1)
    })

    test('When input is 12 then return 1', () =>{
        expect(persistence(12)).toBe(1)
    })

    test('When input is 13 then return 1', () =>{
        expect(persistence(13)).toBe(1)
    })

    test('When input is 19 then return 1', () =>{
        expect(persistence(19)).toBe(1)
    })

    test('When input is 20 then return 1', () =>{
        expect(persistence(20)).toBe(1)
    })

    test('When input is 25 then return 2', () =>{
        expect(persistence(25)).toBe(2)
    })

    test('When input is 26 then return 2', () =>{
        expect(persistence(26)).toBe(2)
    })

    test('When input is 39 then return 3', () =>{
        expect(persistence(39)).toBe(3)
    })

    test('When input is 100 then return 1', () =>{
        expect(persistence(100)).toBe(1)
    })

    test('When input is 151 then return 1', () =>{
        expect(persistence(151)).toBe(1)
    })

    test('When input is 999 then return 4', () =>{
        expect(persistence(999)).toBe(4)
    })
})
import  {slicesToName, nameToSlices} from './breadsandwichkata';

describe('Given slicesToName', () => {

    test ('When input is empty then return null', () =>{
        expect(slicesToName(false)).toBe(null)
    })

    test ('When input is not valid then return null', () =>{
        expect(slicesToName(-2)).toBe(null)
    })

    test ('When input is not valid then return null', () =>{
        expect(slicesToName(1)).toBe(null)
    })


    test ('When input is not valid then return null', () =>{
        expect(slicesToName('bread')).toBe(null)
    })

    test ('When input is 2 then return sandwich', () =>{
        expect(slicesToName(2)).toBe('sandwich')
    })

    test ('When input is 4 then return sandwich sandwich', () =>{
        expect(slicesToName(4)).toBe('sandwich sandwich')
    })

    test ('When input is 6 then return sandwich sandwich sandwich', () =>{
        expect(slicesToName(6)).toBe('sandwich sandwich sandwich')
    })

    test ('When input is 3 then return bread sandwich', () =>{
        expect(slicesToName(3)).toBe('bread sandwich')
    })

    test ('When input is 5 then return bread sandwich sandwich', () =>{
        expect(slicesToName(5)).toBe('bread sandwich sandwich')
    })

    test ('When input is 7 then return bread sandwich sandwich sandwich', () =>{
        expect(slicesToName(7)).toBe('bread sandwich sandwich sandwich')
    })
})

describe('Given nameToSlices', () => {
    test ('When input is 2 then return null', () => {
        expect(nameToSlices(2).toBe(null))
    })

    test ('When input is bread then return null', () => {
        expect(nameToSlices('bread').toBe(null))
    })

    test ('When input is sandwich bread then return null', () => {
        expect(nameToSlices('sandwich bread').toBe(null))
    })

    test ('When input is sandwich then return 2', () => {
        expect(nameToSlices('sandwich').toBe(2))
    })

    test ('When input is sandwich sandwich then return 4', () => {
        expect(nameToSlices('sandwich sandwich').toBe(4))
    })

    test ('When input is sandwich sandwich sandwich then return 6', () => {
        expect(nameToSlices('sandwich sandwich sandwich').toBe(6))
    })

    test ('When input is bread sandwich then return 3', () => {
        expect(nameToSlices('bread sandwich').toBe(3))
    })

    test ('When input is bread sandwich sandwich then return 5', () => {
        expect(nameToSlices('bread sandwich sandwich').toBe(5))
    })

    test ('When input is bread sandwich sandwich sandwich then return 7', () => {
        expect(nameToSlices('bread sandwich sandwich sandwich').toBe(7))
    })
})

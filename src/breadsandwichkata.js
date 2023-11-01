export function slicesToName(n) {
    if (n >= 2){
        return (('bread '.repeat(n%2)) + ('sandwich '.repeat(n/2))).trim()
    }

    return null;
}

export function nameToSlices(name) {
    if (typeof name === 'string' && name.length > 5){
        let sandwich = name.split(' ')

        for (let i = 1; sandwich.length > i; i++){
            if (sandwich[i] !== 'sandwich'){
                return null
            }
        }

        if(sandwich[0] === 'bread'){
            return 1 + ((sandwich.length - 1) * 2)
        }

        return sandwich.length * 2
    }

    return null
}
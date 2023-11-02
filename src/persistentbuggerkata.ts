export function persistence(num: number): number{
    let numLength = num.toString().length
    let result = 0;

    while (numLength > 1){
        let currentCal = 1;

        for (let i = 0; numLength > i; i++){
            currentCal *= Number(num.toString()[i])
        }

        num = currentCal;
        numLength = num.toString().length
        result++;
    }

    return result;
}
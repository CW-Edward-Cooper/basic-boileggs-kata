export function boilEggs(eggsToBoil: number): number{
    let timeToBoil: number = 0;

    while (eggsToBoil > 0 ){
        timeToBoil += 5;
        eggsToBoil -= 8
    }

    return timeToBoil;
}
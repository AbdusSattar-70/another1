function kilometerToMeter(getKilometer) {
    if (getKilometer != 0 && getKilometer > 0) {
        // 1 kilometer = 1000 meter. user input (getKilometer) parsing to float
        var meter = +getKilometer * 1000;
    } else {
        console.log("an error-please enter positive value greater than 0")
    }
    return meter;
}
var m = kilometerToMeter(1);
console.log(m);
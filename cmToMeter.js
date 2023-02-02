function cmToMeter(centimeter){
    const meter = centimeter / 100;
    return meter;
}
const meters = cmToMeter(100);
console.log(meters);
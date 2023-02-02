function inchToFeet (inches) {
    const feet = inches / 12;
    return feet;
}
const dadaInches = 24;
const dadaFeet = inchToFeet(dadaInches);
console.log('feet',dadaFeet);
function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    return false;
}
const myYear = isLeapYear(1900);
console.log(myYear);


function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year, 'is a leap year');
    } else {
        console.log(year, 'is not a leap year');
    }
}

checkLeapYear(1900);
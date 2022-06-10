// params for nbYear(): 
    // p0 (initial population, positive integer), 
    // percent (percent as a postive or null floating point),
    // aug (number of people coming or going per year, integer),
    // p (population to surpass, positive integer)

// note: this exercise is essentially to write the compound interest formula, future value of a series, and add them together
// unfortunately, it is extremely difficult to solve that equation for time. Recursion is the simplest method for finding a solution.

const oneYear = (p0, percent, aug) => {
    return p0 + Math.floor((p0 * percent * 0.01)) + aug;
}

const nbYear = (p0, percent, aug, p) => {
    counter = 1;
    total = oneYear(p0, percent, aug);
    while(total < p) {
        total = oneYear(total, percent, aug);
        counter++;
    }

    return counter;
}

console.log(nbYear(1000, 2, 50, 1200)); //logs 3 as expected
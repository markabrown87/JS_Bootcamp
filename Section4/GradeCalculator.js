function returnGrade(possible, earned = 0) {

    function calculateGrade(possible, earned = 0) {
        return earned/possible;
    }

    function determineLetterGrade(percent) {
        if (percent >= 90) return 'an A';
        else if (percent >= 80) return 'a B';
        else if (percent >= 70) return 'a C';
        else if (percent >= 60) return 'a D';
        else return 'an F';
    }

    if (possible === 0) return NaN;

    let percent = Math.round(calculateGrade(possible, earned) * 100);

    return `You got ${determineLetterGrade(percent)} (${percent}%)!`;
}

console.log(returnGrade(100));
console.log(returnGrade(0));
console.log(returnGrade(10, 5));
console.log(returnGrade(8, 5));
console.log(returnGrade(111,95));
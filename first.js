
console.log("Hello");

function checkDrivingAge(age) {
    if (age < 18) {
        return "Sorry, you are not old enough to drive.";
    } else {
        return "You are old enough to drive.";
    }
}


function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}


function countCharacterOccurrences(inputString, character) {
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === character) {
            count++;
        }
    }
    return count;
}

function checkAverageAndDisplayMessage(numbers) {
    const average = calculateSum(numbers) / numbers.length;
    if (average > 75) {
        return "Congratulations! You have passed.";
    } else {
        return "You need to score more.";
    }
}


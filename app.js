// Check if a number is prime
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
};

// Check if a number is perfect
const isPerfect = (num) => {
    if (num < 2) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== num / i) sum += num / i;
      }
    }
    return sum === num;
};

// Check if a number is Armstrong
const isArmstrong = (num) => {
    const digits = String(num).split('');
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), digits.length), 0);
    return sum === num;
};

// Calculate the sum of digits
const digitSum = (num) => {
    return String(num).split('').reduce((acc, digit) => acc + Number(digit), 0);
};

// Determine if a number is odd or even
const parity = (num) => (num % 2 === 0 ? 'even' : 'odd');

module.exports = { isPrime, isPerfect, isArmstrong, digitSum, parity };

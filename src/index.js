let uniqNum = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};

function toReadable(number) {
    const numStr = number.toString();
    let result = [];
    let decades = number % 100;
    let decade = (Math.floor(decades / 10) * 10);
    let one = (number % 10);

    if (numStr.length > 3) return;

    if (uniqNum[numStr]) {
        return uniqNum[numStr];
    }

    if (numStr.length === 3) {
        result.push(`${uniqNum[numStr[0]]} hundred`);
        if (number % 100 === 1) {
            result.push(`one`);
            return result.join(' ');
        };
    }

    if (!decades) return result.join(' ');
    console.log(decades);
    if (uniqNum[decades]) {
        result.push(`${uniqNum[decades]}`);
    } else {
        result.push(`${uniqNum[decade]} ${uniqNum[one]}`);
    }
    return result.join(' ');
}

module.exports = toReadable;

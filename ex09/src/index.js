function main(numOne, numTwo) {
    var numOne;
    var numTwo;
    var difference;
    numOne = parseInt(prompt('Enter the first number '));
    numTwo = parseInt(prompt('Enter the second number '));
    difference = numOne-numTwo;   
    return difference;
    }
    console.log(main(numOne, numTwo,difference));
    module.exports = main;

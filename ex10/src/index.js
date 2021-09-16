function main(numOne, numTwo) {
    var numOne;
    var numTwo;
    var product;
    numOne = parseInt(prompt('Enter the first number '));
    numTwo = parseInt(prompt('Enter the second number '));
    product = numOne*numTwo;   
    return product;
    }
    console.log(main(numOne, numTwo,product));
    module.exports = main;

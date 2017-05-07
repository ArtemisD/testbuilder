//Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'
// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
var detectNetwork = function(cardNumber) {
 // Note: `cardNumber` will always be a string
 // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
 // The American Express network always starts with a 34 or 37 and is 15 digits long
 // Once you've read this, go ahead and try to implement this function, then return to the console.
 var cardNumLength = cardNumber.length;
 var firstDigit = cardNumber.slice(0, 1);
 var firstTwoDigits = cardNumber.slice(0, 2);
 var firstThreeDigits = cardNumber.slice(0, 3);
 var firstFourDigits = cardNumber.slice(0, 4);
 var firstSixDigits = cardNumber.slice(0, 6);
 if (cardNumLength === 14 && (firstTwoDigits === '38' || firstTwoDigits === '39')) {
   return 'Diner\'s Club';
 } else if (cardNumLength === 15 && (firstTwoDigits === '34' || firstTwoDigits === '37')) {
   return 'American Express';
 } else if ((cardNumLength === 16 || cardNumLength === 18 || cardNumLength === 19) && firstFourDigits === '4903' || firstFourDigits === '4905' || firstFourDigits === '4911' || firstFourDigits === '4936' || firstFourDigits === '6333' || firstFourDigits === '6759' || firstSixDigits === '564182' || firstSixDigits === '633110') {
   return 'Switch';
 } else if ((cardNumLength === 13 || cardNumLength === 16 || cardNumLength === 19) && firstDigit === '4') {
   return 'Visa';
   } else if (cardNumLength === 16 && (firstTwoDigits === '51' || firstTwoDigits === '52' || firstTwoDigits === '53' || firstTwoDigits === '54' || firstTwoDigits === '55')) {
       return 'MasterCard';
 } else if ((cardNumLength === 16 || cardNumLength === 19) && (firstTwoDigits === '65' || firstFourDigits === '6011' || (parseInt(firstThreeDigits, 10) >= 644 && parseInt(firstThreeDigits, 10) <= 649))) {
   return 'Discover';
 } else if ((cardNumLength >= 12 && cardNumLength <= 19) && (firstFourDigits === '5018' || firstFourDigits === '5020' || firstFourDigits === '5038' || firstFourDigits === '6304')) {
   return 'Maestro';
 } else if ((cardNumLength >= 16 && cardNumLength <= 19) && (firstTwoDigits === '65' || firstFourDigits === '6011' || (parseInt(firstSixDigits, 10) >= 622126 && parseInt(firstSixDigits, 10) <= 622925)) || (parseInt(firstThreeDigits, 10) >= 624 && parseInt(firstThreeDigits, 10) <= 626) || (parseInt(firstFourDigits, 10) >= 6282 && parseInt(firstFourDigits, 10) <= 6288)) {
   return 'China UnionPay';
 }
};

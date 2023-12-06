function isValidEmail(email){
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}

function isNumber(number){
    return !isNaN(Number(number))
}



module.exports = {
  isValidEmail,
  isNumber,
};

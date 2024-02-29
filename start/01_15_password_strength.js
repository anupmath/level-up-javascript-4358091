function isPasswordStrong(password) {
  const oneLowerCaseLetter = /(?=.+[a-z])/;
  const oneUpperCaseLetter = /(?=.+[A-Z])/;
  const oneDigit= /(?=.+[0-9])/;
  const oneSpecialCharacter = /(?=.+[!@#$%^&*])/;
  const totalChars = /(?=.{8,})/;
  const isValid = oneLowerCaseLetter.test(password) && oneUpperCaseLetter.test(password) &&
    oneDigit.test(password) && oneSpecialCharacter.test(password) && totalChars.test(password);
  return isValid ? 'Your password is valid ' : 'Your password is invalid';
}

console.log(isPasswordStrong('aas$2'));
console.log(isPasswordStrong('aAs$2dSfs#@#r422'));
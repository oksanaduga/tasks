function isClosedBr(bracket, e) {
  return [')', ']', '}'].indexOf(bracket) > -1;
};

function isValid(str) {
  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{'
  };


  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (isClosedBr(str[i])) {
      if (brackets[str[i]] !== stack.pop()) return false;
    } else {
      stack.push(str[i]);
    }
  }
  return stack.length === 0;
}

module.exports = isValid;

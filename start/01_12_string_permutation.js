function permutations(s) {
  const result = [];

  function helper(s, i, slate) {
    if (i === s.length) {
      result.push(slate.join(''));
      return;
    }

    for (let j = i; j < s.length; j++) {
      swap(s, i, j);
      slate.push(s[i]);
      helper(s, i + 1, slate);
      slate.pop()
      swap(s, i, j);
    }
  }

  helper(s.split(''), 0, []);
  return result;
}

function swap(s, i, j) {
  const temp = s[i];
  s[i] = s[j];
  s[j] = temp;
}

const stringPerms = permutations('abcd');
console.log(stringPerms);
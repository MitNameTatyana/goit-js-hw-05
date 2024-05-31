function checkForSpam(message) {
  const blacklistedWorld1 = 'spam';
  const blacklistedWorld2 = 'sale';
  const includesBanWord1 = message.toLowerCase().includes(blacklistedWorld1);
  const includesBanWord2 = message.toLowerCase().includes(blacklistedWorld2);
  return includesBanWord1 || includesBanWord2;
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

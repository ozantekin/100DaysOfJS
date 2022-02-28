const coin = [2,4,6,8,3,9];

const bank = coin.reduce((total, currentValue) => {return total + currentValue});

console.log(bank);
// 32
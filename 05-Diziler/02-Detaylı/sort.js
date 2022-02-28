const ages = [4,6,8,1,9];

const children = ["Defne","Aram","Lara"];

console.log(ages.sort((a,z) => a-z));
// (5) [1, 4, 6, 8, 9]

console.log(ages.sort((a,z) => z-a));
// (5) [9, 8, 6, 4, 1]

console.log(children.sort());
// (3) ['Aram', 'Defne', 'Lara']
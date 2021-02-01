const ages = [11,20,45,15,87,4,5];
const ages2 = [14,45,25,14,78,54,1,11];
const ages3 = [17,4,5];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages,...ages2,5,...ages3];
console.log(allAges);
const business = 650;
const minister = 450;
const sochib = 250;
const belongings = [650,450,280,850,950,1000];
const maximum = Math.max(business,minister,sochib);
console.log(maximum)
const maximum2 = Math.max(...belongings);
console.log(maximum2);
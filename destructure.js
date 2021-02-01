const person = {name:'jack william',job:'facebooker',age:'17',gf:'emma stone',address:'Kallyanpur',phone:'017780',frinds:['tom hanks','tom cruise','leonardo dicaprio']};
// const gf = person.gf;
// const phone = person.phone;
const {phone,gf,address} = person;
console.log(gf);
console.log(phone);
console.log(address);
//console.log(salary); this is not defined in the person scope

const friends = ['sakib khan','Arman','khan','shahrukh khan'];
const [firstFriend,nextFriend,...restFriends] = friends;
console.log(firstFriend+" "+nextFriend);
console.log(restFriends);

const complexObject = {name:'abc', info:{
    address : 'kallyanpur',
    leader : 'sakib'
}
};
const {leader} =  complexObject.info;
console.log(leader);
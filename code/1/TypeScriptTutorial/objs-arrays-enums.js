"use strict";
//const person: {
//    name: string;
//    age: number;
//} = {
//    const person: {
//        name: string;
//        age: number;
//        hobbies: string[];
//        role: [number,string];
//    } = {
//    name: 'Cian',
//    age: 21,
//    hobbies: ['Coding', 'Cooking'],
//    role: [2, 'Author']
//};
//const ADMIN = 0;
//const READ_ONLY = 1;
//const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Cian',
    age: 21,
    hobbies: ['Coding', 'Cooking'],
    role: Role.READ_ONLY
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
var favouriteActivities;
favouriteActivities = ['Coding'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); // !!! ERROR !!!
}
if (person.role === Role.READ_ONLY) {
    console.log('is read only');
}

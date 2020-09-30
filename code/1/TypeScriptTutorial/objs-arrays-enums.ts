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

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person= {
name: 'Cian',
age: 21,
hobbies: ['Coding', 'Cooking'],
role: Role.READ_ONLY
};

// person.role.push('admin');
// person.role[1] = 10;
 
// person.role = [0, 'admin', 'user'];

let favouriteActivities: string[];
favouriteActivities = ['Coding'];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); // !!! ERROR !!!
}

if(person.role === Role.READ_ONLY){
    console.log('is read only');
}
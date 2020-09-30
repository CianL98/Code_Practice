//const person: {
//    name: string;
//    age: number;
//} = {
    const person: {
        name: string;
        age: number;
        hobbies: string[];
        role: [number,string];
    } = {
    name: 'Cian',
    age: 21,
    hobbies: ['Coding', 'Cooking'],
    role: [2, 'Author']
};

// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];

let favouriteActivities: string[];
favouriteActivities = ['coding'];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); // !!!ERROR!!!
}

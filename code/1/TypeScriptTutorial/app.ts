//const person: {
//    name: string;
//    age: number;
//} = {
    const person = {
    name: 'Cian',
    age: 21,
    hobbies: ['Coding', 'Cooking']
};

let favouriteActivities: string[];
favouriteActivities = ['coding'];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); // !!!ERROR!!!
}

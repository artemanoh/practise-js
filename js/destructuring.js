// Демтруктизація це спосіб скоротити звернення до класів в об'єкті
const user = {
    name: 'John',
    password: '12345',
    friends: ['Peter', 'Steven', 'Tom'],
    addres: {
        country: `Ukraine`,
        town: `Bar`,
    }
};
// const userCountry = user.addres.country;
// const password = user.password;
// const name = user.name;
// const friends = user.friends;
const {name: userName, password, friends, addres: {country, town}} = user;
// const {country, town} = user.addres;
console.log(userName, password, friends);
console.log(country, town);
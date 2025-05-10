// Створіть функцію, яка буде додавати об'єкт в localStorage.
//  Назва об'єкту має бути ключем, а сам об'єкт - значенням.
const user = {
  login: "artem",
  password: "12345678",
};

const friends = ["Artem", "Max","Katia","Natalia"]
    localStorage.setItem("friendsInfo",JSON.stringify(friends))

function addUserToLocalStorage(userData, key) {
//   const archiveData = JSON.stringify(userData);
//   console.log(typeof archiveData);
//   localStorage.setItem("userInfo", archiveData);
localStorage.setItem(key, JSON.stringify(userData));
}

addUserToLocalStorage(user, "userInfo");
addUserToLocalStorage(friends, "friendsInfo");

// Створіть функцію, яка буде отримувати об'єкт з localStorage. 
// Назва об'єкту має бути ключем, а сам об'єкт - значенням.

function getUserFromLocalStorage(userData) {
  const dataFromLocalStorage = localStorage.getItem(userData);
  const parseData = JSON.parse(dataFromLocalStorage);
  return parseData
}
console.log(getUserFromLocalStorage("friendsInfo"))
console.log(getUserFromLocalStorage("userInfo"))

function deleteAllFromLocalStorage() {
localStorage.clear()
}

deleteAllFromLocalStorage()
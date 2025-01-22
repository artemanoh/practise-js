// Прототипне наслідування це коли ми створюємо об'єкт (екземпляр) на базі іншого об'єкта (прототипа)
// та унаслідує всі властивості та методи від прототипа

// const user = {
//   site: "youtube",
//   status: "Premium",
//   showInfo() {
//     return `Даний користувач зареєстрований на сайті ${this.site} зі статусом ${this.status}`;
//   },
// };

// const userArtem = Object.create(user);
// console.log(userArtem.site);
// console.log(userArtem.showInfo()); //  подивились showInfo в userArtem який доступний з user(prototype)
// console.log(userArtem);
// userArtem.logIn = "Artem";
// userArtem.password = 87654321;

// console.log(userArtem);

// for (const key in userArtem) {
//   if (userArtem.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// Функції конструктори-це модель або шаблон,
// за якою ми створюємо екземпляр
// const Car = function(carModel, carCost, carColor ){
//   this.model = carModel;
//   this.cost = carCost;
//   this.color = carColor;
// };

// const carBMW = new Car("BMW", 50000, "red")
// console.log(carBMW)

// const carLamborgini = new Car("Lamborgini", 100000, "blue")
// console.log(carLamborgini)

// const carTesla = new Car("Tesla", 80000, "grey")
// console.log(carTesla)

// передамо аргументи у вигляді об'єкта параметрів
// const Car = function({ modelcar, pricecar,colorcar}){
//     // const {modelcar,modelprice,modelcolor} = infoBMW
//     this.model = modelcar;
//     this.cost = pricecar;
//     this.color = colorcar;

//     this.showInfo = function () {
//         return `автомобіль ${this.modelCar} коштує ${this.pricecar} та має колір ${this.colorcar} `
//     }
//   };
//   const infoBMW = {
//    modelcar: "BMW",
//    pricecar: 50000,
//    colorcar: "green"
//   }
//   const carBMW = new Car(infoBMW)
//   console.log(carBMW)

//   const carLamborgini = new Car({
//     modelcar: "Lamborgini",
//     modelprice: 100000,
//     modelcolor: "blue"})
//   console.log(carLamborgini)

//   const carTesla = new Car({
//     modelcar: "Tesla",
//     modelprice: 80000,
//     modelcolor: "grey"})
//   console.log(carTesla)

//   console.log(carTesla.showInfo())
//   console.log(carBMW.showInfo())
//   console.log(carLamborgini.showInfo())

//   напишемо гру битва орків і ельфів
class Hero {
  constructor(infoOrk) {
    this.name = infoOrk.heroName;
    this.points = infoOrk.heroPoints;
    this.power = infoOrk.heroPower;
  }

  showInfo() {
    return `Герой ${this.name} має стільки поінтів ${this.points} та стільки сили ${this.power}`;
  }
}

class Ork extends Hero {
  constructor(infoElf) {
    super(infoOrk); // цей метод затягує данні з конструктора класу Hero
    this.skin = "green";
    this.iq = "medium";
  }

  orkAttacks() {
    message`Вас атакуж орк з iq ${this.iq}`;
  }
}

const broOrk = new Ork({
  heroName: "Bro",
  heroPoints: 10,
  heroPower: 20,
  heroSkin: "green",
  heroIq: 4,
});
console.log(broOrk)

const alexOrk = new Ork({
  heroName: "alex",
  heroPoints: 12,
  heroPower: 22,
  heroSkin: "green",
  heroIq: 6,
});

class Elf extends Hero {
    constructor(infoOrk) {
        super(infoOrk)
        this.earsLength = infoElf.heroEarsLength
        this.age = infoElf.heroAge
    }

    elfPowers() {
        return `Ельф має стільки років ${this.age}`
    }
}

const johnElf = new Elf({
    heroName: "John",
    heroPoints: 15,
    heroEarsLength: "15см",
    heroAge: 500,
})

const bredElf = new Elf({
    heroName: "John",
    heroPoints: 15,
    heroEarsLength: "15см",
    heroAge: 500,
})
console.log(bredElf)

console.log(alexOrk.showInfo())
console.log(alexOrk.orkAttacks())

console.log(johnElf.elfPowers())
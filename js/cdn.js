const arr = [1, 2, 3, 4, 5]
console.dir(_.drop(arr, 2))

console.dir(_.chunk(arr,3))

function Foo() {
    this.name = "mark"
}

const object = {
surname: "levurdiak",
age: "16"
};

const object2 = {
    name: "max"
}

const newAssign = _.assign(object2, new Foo)

console.log(newAssign)

const boxMouseOver = document.querySelector(".boxes")

let mouseCount = 0;

// boxMouseOver.addEventListener("mousemove",  _.throttle((event) => {
//     mouseCount += 1
//     console.log(mouseCount)
// }, 1000)
// )

// boxMouseOver.addEventListener("mousemove",  _.debounce((event) => {
//     mouseCount += 1
//     console.log(mouseCount)
// }, 1000)
// )

const block = document.querySelector(".block");

block.addEventListener("mousemove",  _.throttle((event) => {
    console.log(event)
    block.style.right = event.clientX + "px"
    block.style.top = event.clientY + "px"
}, 50)
)


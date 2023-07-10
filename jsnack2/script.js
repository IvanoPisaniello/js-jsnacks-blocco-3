const divContainer = document.getElementById("divContainer");
let number = [];
let oddNumber = 0;
for (let i = 0; i < 2; i++) {
    let div = document.createElement("div");
    div.classList.add("color-text" + i);
    div.innerHTML = ("blablabla")

    divContainer.append(div);
}

document.querySelector(".color-text0").innerHTML = ("i numeri dispari sono:");
document.querySelector(".color-text1").innerHTML = ("i numeri pari sono:");

let i = 0;
for (let i = 0; i < 10; i++) {
    number.push(Math.floor(Math.random() * (100)));
    console.log(number[i]);

    let numbers = (number[i]);

    if (numbers % 2 === 1) {
        console.log("numeri dispari:" + numbers)
        document.querySelector(".color-text0").innerHTML += numbers.toString() + " ";


    } else if (numbers % 2 === 0) {
        console.log("numeri pari:" + numbers)
        document.querySelector(".color-text1").innerHTML += numbers.toString() + " ";

    }

}








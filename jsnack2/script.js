const divContainer = document.getElementById("divContainer");
let number = [];

for (let i = 0; i < 2; i++) {
    let div = document.createElement("div");
    div.classList.add("color-text" + i);
    div.innerHTML = ("blablabla")



    divContainer.append(div);






}


for (let i = 0; i < 10; i++) {
    number.push(Math.floor(Math.random() * (100)));
    console.log(number[i]);

    const numbers = (number[i]);



    // if (numbers % 2 !== 0) {
    //     console.log(numbers);
    // }

}
if (numbers % 2 !== 0) {
    console.log(numbers);
}

// const oddNumber = (number % 2 !== 0);
// const firstDiv = document.querySelector("color-text0");

// console.log(oddNumber);

// document.querySelector(".color-text0").innerHTML = oddNumber;

// console.log(number);




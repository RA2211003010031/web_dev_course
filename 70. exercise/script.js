// let color

// let rand = Math.random()
// if(rand<0.2) {
//     color = "red"
// }
// else if(rand>=0.2 && rand<0.4){
//     color = "green"
// }
// else if(rand>=0.4 && rand<0.6){
//     color = "blue"
// }
// else if(rand>=0.6 && rand<0.8){
//     color = "pink"
// }
// else{
//     color = "yellow"
// }

// document.body.childNodes[1].children[0].style.backgroundColor = color

// rand = Math.random()
// if(rand<0.2) {
//     color = "red"
// }
// else if(rand>=0.2 && rand<0.4){
//     color = "green"
// }
// else if(rand>=0.4 && rand<0.6){
//     color = "blue"
// }
// else if(rand>=0.6 && rand<0.8){
//     color = "pink"
// }
// else{
//     color = "yellow"
// }

// document.body.childNodes[1].children[1].style.backgroundColor = color

// rand = Math.random()
// if(rand<0.2) {
//     color = "red"
// }
// else if(rand>=0.2 && rand<0.4){
//     color = "green"
// }
// else if(rand>=0.4 && rand<0.6){
//     color = "blue"
// }
// else if(rand>=0.6 && rand<0.8){
//     color = "pink"
// }
// else{
//     color = "yellow"
// }

// document.body.childNodes[1].children[2].style.backgroundColor = color

// rand = Math.random()
// if(rand<0.2) {
//     color = "red"
// }
// else if(rand>=0.2 && rand<0.4){
//     color = "green"
// }
// else if(rand>=0.4 && rand<0.6){
//     color = "blue"
// }
// else if(rand>=0.6 && rand<0.8){
//     color = "pink"
// }
// else{
//     color = "yellow"
// }

// document.body.childNodes[1].children[3].style.backgroundColor = color

// rand = Math.random()
// if(rand<0.2) {
//     color = "red"
// }
// else if(rand>=0.2 && rand<0.4){
//     color = "green"
// }
// else if(rand>=0.4 && rand<0.6){
//     color = "blue"
// }
// else if(rand>=0.6 && rand<0.8){
//     color = "pink"
// }
// else{
//     color = "yellow"
// }

// document.body.childNodes[1].children[4].style.backgroundColor = color




console.log("Initializing script.js")

function getRandomColor() {
    let a = Math.ceil(Math.random()*255)
    let b = Math.ceil(Math.random()*255)
    let c = Math.ceil(Math.random()*255)

    return `rgb(${a}, ${b}, ${c})`
}

let boxes = document.querySelector(".container").children;

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})
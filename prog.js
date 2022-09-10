const leftArr = document.getElementById("left-arrow")
const rightArr = document.getElementById("right-arrow")

const surprise = document.getElementById("Surprise")
const id = document.getElementById("id")
const names = document.getElementById("name")
const career = document.getElementById("career")
const about = document.getElementById("about")

let count = 0
let randomNum = 0

const revCard = [
    ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
            
    ,["Susan Smith" , "Yolotli Tarqik" , "Iqaluk Asiri","Ahuludegi Awee"]
            
    ,["WEB DEVELOPER","EVENTS ORGANISER","LITERARY AGENT","FLYING INSTRUCTOR"]

    ,[`Lorem ipsum,
    dolor sit amet consectetur adipisicing elit. 
    Voluptatibus et aspernatur ex accusantium hic aut nemo magnam similique animi eum explicabo eius voluptas atque, 
    aliquam, perspiciatis fuga blanditiis voluptates vero!`,

    `Responsible for creating effective sales presentations and proposals based on current advertising strategies.
    Assisting in developing and updating company policies and procedures.
    Dealing with customers' complaints.
    Ensuring cost and service effectiveness.`,

    `the wogglebug clocked super slow is really n amazingly useful CV tool.
    even with an external clock plugged in,
    the clockrate knob will still some how control the "amount" of craziness to a certain extent. 
    also the audio outs are killer for drones, `,

    `many of the random generators are great and each are special. 
    but remember also that you are not limited to what they do natively.
    part of the fun is combining them with other modules to regulate and 
    modulate the randomness that they generate themselves.`

]] 

leftArr.addEventListener("click",function(){
    if(count===0){
    count = 3}
    else {
    count--}
    id.setAttribute("src",revCard[0][count])
    names.innerHTML = revCard[1][count]
    career.innerHTML = revCard[2][count]
    about.innerHTML = revCard[3][count]
})

rightArr.addEventListener("click",function(){
    if(count===3){
    count = 0}
    else {
    count++}
    id.setAttribute("src",revCard[0][count])
    names.innerHTML = revCard[1][count]
    career.innerHTML = revCard[2][count]
    about.innerHTML = revCard[3][count]
})

surprise.addEventListener("click",function(){
    count = Math.floor(Math.random() * 4)
    id.setAttribute("src",revCard[0][count])
    names.innerHTML = revCard[1][count]
    career.innerHTML = revCard[2][count]
    about.innerHTML = revCard[3][count]
})
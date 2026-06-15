let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");
let box3=document.querySelector(".box3");
let box4=document.querySelector(".box4");
let box5=document.querySelector(".box5");
let box6=document.querySelector(".box6");
let box7=document.querySelector(".box7");
let box8=document.querySelector(".box8");
let box9=document.querySelector(".box9");

let currentPlayer="X";

let boxes=document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("click",()=>{

    if(box.innerText!="") return;

    box.innerText=currentPlayer;
    if(currentPlayer==="X"){
        box.style.color = "#FF5964";
    }
    checkWinner();
    //change player
    currentPlayer=currentPlayer==="X"?"O":"X";
    });
});



let player1Score=document.querySelector(".player1Score");
let draws=document.querySelector(".drawsScore");
let player2Score=document.querySelector(".player2Score");

const winPatterns=[
    [box1,box2,box3],
    [box4,box5,box6],
    [box7,box8,box9],
    [box1,box4,box7],
    [box2,box5,box8],
    [box3,box6,box9],
    [box1,box5,box9],
    [box3,box5,box7]
];

function checkWinner(){
    for(let pattern of winPatterns){
        let [a,b,c]=pattern;
        if(a.innerText!=="" &&
            a.innerText===b.innerText &&
            b.innerText===c.innerText
        ){
            if(a.innerText==="O"){
                player1Score.innerText=Number(player1Score.innerText)+1;

            }
            else{
                player2Score.innerText=Number(player2Score.innerText)+1;
            }
            alert(a.innerText+"Wins!");
            return;
        }
    }
}






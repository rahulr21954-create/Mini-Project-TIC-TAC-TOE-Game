let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");
let box3=document.querySelector(".box3");
let box4=document.querySelector(".box4");
let box5=document.querySelector(".box5");
let box6=document.querySelector(".box6");
let box7=document.querySelector(".box7");
let box8=document.querySelector(".box8");
let box9=document.querySelector(".box9");


box1.addEventListener("click",()=>{
  timer= setTimeout(()=>{
     box1.innerText="O";
    checkWinner();
   },3000)
})
box2.addEventListener("click",()=>{
    box2.innerText="O";
    checkWinner();
})
box3.addEventListener("click",()=>{
    box3.innerText="O";
    checkWinner();
})
box4.addEventListener("click",()=>{
    box4.innerText="O";
    checkWinner();
})
box5.addEventListener("click",()=>{
    box5.innerText="O";
    checkWinner();
})
box6.addEventListener("click",()=>{
    box6.innerText="O";
    checkWinner();
})
box7.addEventListener("click",()=>{
    box7.innerText="O";
    checkWinner();
})
box8.addEventListener("click",()=>{
    box8.innerText="O";
    checkWinner();
})
box9.addEventListener("click",()=>{
    box9.innerText="O";
    checkWinner();
})



box1.addEventListener("dblclick",()=>{
    box1.innerText="X";
    box1.style.color="#FF5964";
    console.log("clicked")
    checkWinner();
})
box2.addEventListener("dblclick",()=>{
    clearTimeout(timer);
    box2.innerText="X";
    box2.style.color="#FF5964";
    console.log("clicked")
    checkWinner();
})
box3.addEventListener("dblclick",()=>{
    box3.innerText="X";
    box3.style.color="#FF5964";
    checkWinner();
})
box4.addEventListener("dblclick",()=>{
    box4.innerText="X";
    box4.style.color="#FF5964";
    checkWinner();
})
box5.addEventListener("dblclick",()=>{
    box5.innerText="X";
    box5.style.color="#FF5964";
    checkWinner();
})
box6.addEventListener("dblclick",()=>{
    box6.innerText="X";
    box6.style.color="#FF5964";
    checkWinner();
})
box7.addEventListener("dblclick",()=>{
    box7.innerText="X";
    box7.style.color="#FF5964";
    checkWinner();
})
box8.addEventListener("dblclick",()=>{
    box8.innerText="X";
    box8.style.color="#FF5964";
    checkWinner();
})
box9.addEventListener("dblclick",()=>{
    box9.innerText="X";
    box9.style.color="#FF5964";
    checkWinner();
})

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




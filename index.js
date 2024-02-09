// for each method
// let arr=[12,23,5,44,];
// arr.forEach((num)=>{
//     console.log(num*num);
// })

// map method

// let a=[1,3,5,6];
// a.map((val)=>{
//     console.log(val);
// })

// filter method
// arr=[15,28,34,40,67,76,89,90,95,89,92,99]
// let newar = arr.filter((val)=>{
//     return val>80;
// })
// console.log(newar);

// reduce funtion 
// const arr=[1,45,3,5,6,7];
// const op=arr.reduce((res,curr)=>{
//     let a= res>curr?res:curr
//     return a;
// })
// console.log(op);

// let n = prompt("enter a number : ")

// let arr=[]
// for (let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(window)

// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+"from collge";



// let newbtn=document.createElement("button");
// newbtn.innerText="click Me!";

// newbtn.style.color="blue";
// newbtn.style.backgroundColor="red";

// document.querySelector("body").prepend(newbtn);

// let a=document.getElementById('mb')

// a.addEventListener('mousedown',event=>{
//     console.log("mouse Down")
//     console.log(document.style="black")
// })


// TIC TAC TOE GAME 

let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;
let playO=true;
const winpat=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

const resetGame = () => {
    playO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(playO){
            box.innerText="O";
            playO=false;
        }else{
            box.innerText="X";
            playO=true;
        }
        box.disabled=true;
        count++;


        let isWinner = checkWinner();

        if (count===9 && !isWinner){
            gameDraw();
        }
    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

  const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
  





  const checkWinner = () => {
    for (let pattern of winpat) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };

  newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
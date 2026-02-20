let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset-btn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".container-msg");
let newBtn=document.querySelector("#new-btn");
let turn0=true;
let cnt=0;

const winPatterns=[[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,7]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        cnt++;

        let isWinner=checkWinners();
        
        if(cnt===9 && isWinner===false){
            drawback();
        };
        
    });
});

const resetBtn=()=>{
    turn0=true;
    cnt=0;
    enableBox();
    msgcontainer.classList.add("hide");
};
const disableBox=()=>{
    boxes.forEach(box => box.disabled=true);
};

const enableBox=()=>{
    boxes.forEach(box=>{
        box.disabled=false;
        box.innerText="";
    });
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBox();
};

const drawback=()=>{
    msg.innerText="DRAW, Let's ty again!";
    msgcontainer.classList.remove("hide");
    disableBox();
};


const checkWinners=()=>{
    for(let patterns of winPatterns){
        let pos1=boxes[patterns[0]].innerText;
        let pos2=boxes[patterns[1]].innerText;
        let pos3=boxes[patterns[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos2);
                showWinner(pos2);
                return true;
            }
            
            }
            
        }   
        return false;   
    };


reset_btn.addEventListener("click",resetBtn);
newBtn.addEventListener("click",resetBtn);

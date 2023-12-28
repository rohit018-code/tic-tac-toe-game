let boxes =document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new");
let msgcont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetgame = () =>{
    turn0=true;
    enableboxes();
    msgcont.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click", () =>
    {
        console.log("box was clicked");
        if(turn0)
        {
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
    });
});

const disableboxes = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const enableboxes = () =>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText="";
    }
}

const showwinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableboxes();
};

const checkwinner = () =>{
    for(let pattern of winpatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );
            
            let posval1=boxes[pattern[0]].innerText;
            let posval2 = boxes[pattern[1]].innerText;
            let posval3 = boxes[pattern[2]].innerText;

            if(posval1 != "" && posval2 != ""  && posval3 !=""){
                if(posval1===posval2  && posval2 === posval3){
                    console.log("winner",posval1);
                    showwinner(posval1);
                }
            }
    }
};

newgamebtn.addEventListener("click", resetgame) ;
reset.addEventListener("click", resetgame);
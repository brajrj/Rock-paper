let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");


const gencompchoice = () => {
    const options = ["rock" , "paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
const drawgame = () => {
    // console.log("game was draw.");
    msg.innerText="game draw! play again";
    msg.style.backgroundColor="blue";


}

const showwinner= (userwin,userchoice,compchoice) => {
    if(userwin) {
        userscore ++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win! your  ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    } else {
        compscore ++;
        compscorepara.innerText=compscore;
        msg.innerText=`you lose!  ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";


    }
};

const playgame = (userchoice) => {
    // console.log("user choice = ", userchoice);
    //genrate computer choice
    const compchoice = gencompchoice();
    // console.log("comp choice = ", compchoice);

    if(userchoice === compchoice){
        drawgame();
    } 
    else {
        let userwin = true;
        if(userchoice === "rock") {
            // sciss. pape
           userwin= compchoice==="paper" ? false : true;   //ternaory statement use kiya
        } else if(userchoice==="paper") {
            userwin = compchoice==="scissors"? false : true;
        } else {
            // rock , scisss
            compchoice==="rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice= choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});
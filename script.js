let buttons=document.querySelectorAll('.button');
let newbu=document.querySelector('.new');
let p=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let turn=true;

newbu.addEventListener("click",()=>{
    for(let x of buttons){
        x.innerHTML="";
        x.disabled=false;
    }
    winner.innerHTML="";
})

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(turn){
        button.innerText='0';
        turn=false;
        }
        else{
            button.innerText='X';
           turn=true
        }
        button.disabled=true;
        win();
    })
});
let winner=document.querySelector('.win');
const showwin = (win) =>{
     winner.innerHTML=`Winner is player'${win}'<br> pls CLICK ON RESET FOR NEW GAME `;
     for(let x of buttons){
        x.disabled=true;
     }
}


const win = () =>{
    for(let i of p){
        let val1=buttons[i[0]].innerText;
        let val2=buttons[i[1]].innerText;
        let val3=buttons[i[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1==val2 && val2==val3){
                showwin(val1);
                
            }
        }
    }

}
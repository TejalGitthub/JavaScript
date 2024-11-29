let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turno=true; 
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
const winpatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>
        {
          console.log("you clicked function...")
          if(turno)
            {
              box.innerText="O";
              turno=false; 
            }
          else
            {
              box.innerText="X";
              turno=true;
            }
        box.disabled=true;
       checkWinner();

        }
    )})
    const resetGame=()=>
      {
      trueo=true;
      clearBoxes();
enableBoxes();
msgcontainer.classList.add("hide");
    }
    const clearBoxes=()=>{
      for(val of boxes)
      {
        val.innerText="";
      }
    }
const enableBoxes=()=>{
  for(let val of boxes)
  {
    val.disabled=false;
  }
}
newgamebtn.addEventListener("click",resetGame);

reset.addEventListener("click",resetGame);
    const showWinner=(a)=>
    {
      msg.innerText=`Congratulations Winner is ${a}`
      msgcontainer.classList.remove("hide");
    }

    const checkWinner=()=>{
      for(let pattern of winpatterns)
    {
      let pos1=boxes[pattern[0]].innerText;
      let pos2=boxes[pattern[1]].innerText; 
      let pos3=boxes[pattern[2]].innerText;
      if(pos1!=="" &&  pos2!=="" && pos3!=="")
      {
        if(pos1==pos2 && pos2==pos3)
        {
          console.log("winner is ",pos3);
          for(box of boxes)
          {
            box.disabled=true;
          }
          showWinner(pos1);
        }
      }
    }
      }
      
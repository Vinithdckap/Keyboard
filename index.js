const buttons = document.querySelectorAll("button");
const textarea = document.querySelector("textarea");
const caps  = document.querySelector(".caps");
const shiftBtn = document.querySelector(".shift")

for(let i =0; i<buttons.length;i++){
    buttons[i].addEventListener("click",(e)=>{

        if(e.target.innerText !== "Backspace" && e.target.innerText !=="Enter"  && e.target.innerText!=="Capslock" && e.target.innerText!=="Tab" && e.target.innerText!== "Shift"   && e.target.innerText!=="Del"  && e.target.innerText!== "Space" ){
            textarea.value += e.target.innerText;
        }
        if (e.target.innerText === "Backspace") {
            textarea.value = textarea.value.slice(0, textarea.value.length - 1);
        }
        if (e.target.innerText === "Del") {
            textarea.value = ""
        }
        if(e.target.innerText === "Enter"){
            textarea.value += "\n";
        }
        if(e.target.innerText ==="Tab"){
            textarea.value += "    "
        }
        if(e.target.innerText ==="Space"){
            textarea.value += " ";
        }

    })  

    caps.addEventListener('click',()=>{
        if(buttons[i].innerText !== "Backspace" && buttons[i].innerText !=="Enter" && buttons[i].innerText!=="Capslock" && buttons[i].innerText!=="Tab" && buttons[i].innerText!== "Shift"  && buttons[i].innerText!=="Del"  && buttons[i].innerText!== "Space"){
            buttons[i].classList.toggle('UppperCase')

        }
       
    })

    shiftBtn.addEventListener('click',()=>{
        if(buttons[i].innerText !== "Backspace" && buttons[i].innerText !=="Enter" && buttons[i].innerText!=="Capslock" && buttons[i].innerText!=="Tab" && buttons[i].innerText!== "Shift"  && buttons[i].innerText!=="Del"  && buttons[i].innerText!== "Space"){
            buttons[i].classList.toggle('UppperCase')

        }
       
    })
    
}           




    


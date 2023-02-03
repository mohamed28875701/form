const pass=document.getElementById("password");
const conf=document.getElementById("confirm-pass");
const signup=document.getElementById("signup");
signup.addEventListener("click",()=>{
    if(pass.textContent!==conf.textContent){
        pass.style.borderColor=rgb(252,15,245);
        conf.style.borderColor=rgb(252,15,245);
    }
})
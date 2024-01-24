const btn=document.querySelector(".btn")
const container=document.querySelector(".container")
const output=document.querySelector(".result")

let score=0
container.addEventListener("click",(e)=>{
    if(e.target.value=="Paris"){
        score++
    }
    if(e.target.value=="Jupiter"){
        score++
    }
    if(e.target.value=="2"){
        score++
    }
})
btn.addEventListener("click",()=>{
    output.innerHTML=score
})
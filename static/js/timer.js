//console.log("Hello World")
const timer = document.getElementById('displaytimer')
//console.log(timer.textContent)
const inputTag = document.getElementById('timer')

t=0
setInterval( () => {
    t+=1
    timer.innerHTML ="<b>Timer: " +t+" seconds</b>"
    inputTag.value = t
},1000)
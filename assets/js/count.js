let count = 0;
const counterElement = document.getElementById("counter");
const btnZero = document.getElementById("btnZero")
const btnStart = document.getElementById("btnStart")
const btnStop = document.getElementById("btnStop")

let myInterval = setInterval(() => {
    count++;
    counterElement.textContent = count;
}, 1000);


btnZero.addEventListener("click",()=>{
    count = 0;
    counterElement.textContent = count;
})

btnStop.addEventListener("click",()=>{
    clearInterval(myInterval);
    console.log("salam");
})

btnStart.addEventListener("click", () => {
    if (myInterval) {
        myInterval = setInterval(() => {
            count++;
            counterElement.textContent = count;
        }, 1000);
    }
});








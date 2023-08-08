let dayText=document.querySelector(".day")
let monthText=document.querySelector(".month")
let timeText=document.querySelector(".time")
 
var allmonths=["January","February","March","April","May","June","July","August","September","October","November","December"];
var alldays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

setInterval(() => {
    let date=new Date()
    let day=alldays[date.getDay()]
    let month=allmonths[date.getMonth()]
    let hours=date.getHours()
    let minutes=date.getMinutes()
    let seconds=date.getSeconds()

    if(hours<10){
         hours="0"+hours
    }
    if(minutes<10){
         minutes="0"+minutes
    }
    if(seconds<10){
         seconds="0"+seconds
    }


    dayText.textContent=day
    monthText.textContent=month
    timeText.textContent=hours+":"+minutes+":"+seconds
})
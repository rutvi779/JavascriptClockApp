setInterval(myClock,1000);

const hourHand=document.querySelector('[data-hour-hand]');
const minHand=document.querySelector('[data-minute-hand]');
const secondsHand=document.querySelector('[data-second-hand]');
function myClock(){
    const currentDate=new Date();
    const secondRatio=currentDate.getSeconds()/60;
    const minRatio=(secondRatio + currentDate.getMinutes())/60;
    const hourRatio=(minRatio + currentDate.getHours())/12;
    setRotation(secondsHand,secondRatio)
    setRotation(minHand,minRatio)
    setRotation(hourHand,hourRatio)
}
function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360)
}
myClock()
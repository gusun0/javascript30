const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
 const now = new Date();
 const seconds = now.getSeconds();
 const secondsDegrees = ((seconds/60)*360) + 90; 
 secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

 const mins = now.getMinutes();
 console.log(mins);
 const minsDegrees = ((mins/60)*360) +90;
 console.log(minsDegrees);
 minHand.style.transform = `rotate(${minsDegrees}deg)`;


 const hour = now.getHours();
 const hourDegrees = ((mins/12)*360) +90;
 minHand.style.transform = `rotate(${minsDegrees}deg)`;


}

setInterval(setDate, 1000);




// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

console.log("js")

console.log(Date())
var date = new Date()
console.log(date.getHours())
console.log(date.getMinutes())

function Tesla(){
  var obj = [false,42,0,0]
  if (obj[0] == true){
    console.log("stop")
  }
  else(
    console.log("continue")
  )
   
  if(obj[1] > 20 && obj[1] < 50){
    console.log("mid speed")
  }
  else if (obj[1] < 20){
    console.log("low speed")
  }
  else(
    console.log("high speed")
  )

  // charge 

  if(obj[2] < 20){
   console.log("low battery")
  } 
  else if(obj[2] <  70 && obj[2] > 20){
    console.log("Ready to go,Good amount of charge")
  }
  else{
    console.log("full buddy")
  }
  // distance

}
Tesla()


function quickBug () {
    console.log("I was Clicked!")
}
var stopFunction = false

let twoText = document.getElementById(`two`)


var score=1;

function stopFunc () {
    stopFunction==true
   return

}

function addScore() {

    score = score + 10
    console.log(score)
}

function addOne() {
    score= score + 1
    console.log(score)
}

function addTwo() { 
    score = score + 2
    console.log(score)
}
function addThree() { 
    score = score + 3
    console.log(score)
}

// This function checks the variable score. The score variable allows the process of checking
// for different conditions to manipulate the document
function betterCode() {
    fork1()
    if (score ===11) {
        let twoText = document.getElementById(`two`)
        twoText.innerHTML = "Joel is fuming at his brother. He filled with frustration. <br> but there is no time for feelings <br> the highway is more jammed than a pb sandwich"
        console.log(`I was Clicked!`)
        fork1()

    }

    if (score ===2) {
        let twoText = document.getElementById(`two`)
        twoText.innerHTML = "Joel and his family are eventually overrun. They walk the earth as Zombies. What shall they eat for dinner?"
        console.log(`I was Clicked!`)
        fork1()

    }
    if (score === 5) {
    
        let twoText= document.getElementById(`two`)
        twoText.innerHTML= "Eggplant Parmesian is not sustenance... You grow weary and rejoin the earth"
}

    if (score === 4){
    
        let twoText= document.getElementById(`two`)
        twoText.innerHTML="The brains hit the spot today, the crew lives on happily ever after..."
    } 

    if (score ===13) {
        let twoText= document.getElementById(`two`)
        twoText.innerHTML="Joel hopes to find the safety in numbers.<br> There will be things to salvage, if all else fails..."

    }
    if (score === 14) {
        let twoText= document.getElementById(`two`)
        twoText.innerHTML="Joel will try to find safety for his family in solitude.<br> His family is tired, hoping to stop and sleep soon"

    }

    


}


function resetUI() {}



   




function fork1 (){

    if (score === 2)
    {
    let optionA = document.getElementById(`a1`)
    optionA.innerHTML="Brains"
    
     let optionB = document.getElementById(`b1`)
     optionB.innerHTML = "Eggplant Parmesean"
    }
     if (score === 4  || score ===5 || score===13 || score===14 )
        {
        let optionA = document.getElementById(`a1`)
        optionA.innerHTML="..."
        
         let optionB = document.getElementById(`b1`)
         optionB.innerHTML = "..."
        }
         



if (score ===11) {
     
    let optionA = document.getElementById(`a1`)
    optionA.innerHTML="Swerve off the road and barrel towards the dark emptiness of open land"

    let optionB = document.getElementById(`b1`)
    optionB.innerHTML = "Swerve off the paved road into the brush, aiming for the lights of the city"
    
}



}
function fork2() {
    if (score<=22 && score >20) {
        var optionA = document.getElementById(`a1`)
        var resultA = document.createElement(`p`)
        var resultContentA = document.createTextNode("Brains")
        resultA.appendChild(resultContentA)
        optionA.appendChild(resultA)
        var optionB = document.getElementById(`b1`)
        var resultB = document.createElement(`p`)
        var resultContentB = document.createTextNode("eggplant parmesean")
        resultB.appendChild(resultContentB)
        optionB.appendChild(resultB)
    
    }

    if (score <=3 && score > 2) {
        var optionA = document.getElementById(`a1`)
        var resultA = document.createElement(`p`)
        var resultContentA = document.createTextNode("")
        resultA.appendChild(resultContentA)
        optionA.appendChild(resultA)
        var optionB = document.getElementById(`b1`)
        var resultB = document.createElement(`p`)
        var resultContentB = document.createTextNode("")
        resultB.appendChild(resultContentB)
        optionB.appendChild(resultB)
    
    }
}



function resetUI () {
var resetButton = document.getElementById(`reset`)

var clicker = document.createElement(`p`)

clicker.innerText="Start Again"

resetButton.appendChild(clicker)


}

function startAgain () {
    window.location.reload()
}
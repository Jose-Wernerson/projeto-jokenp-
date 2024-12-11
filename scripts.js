const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const roleta =document.querySelector('.roleta')

let humanScoreNumber =0
let machineScoreNumber =0


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())

    
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)


    return choices [randomNumber]

}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = "DEU EMPATE!"
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === "paper")
    ) {
        humanScoreNumber++
        humanScore.innerHTML=humanScoreNumber
        result.innerHTML = "VOCÊ GANHOU ESSA RODADA!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML =machineScoreNumber
        result.innerHTML = "VOCÊ PERDEU ESSA RODADA!"

        // ('rock'=== "&#x270A;"|| 'scissors'=== "&#x270C;"|| 'paper' === "&#x1F91A;")
    }
    if (machine==='rock'){
        roleta.innerHTML= "&#x270A;"
        roleta.style.backgroundColor="#444444"
    }
    if (machine==='paper'){
        roleta.innerHTML= "&#x1F91A;"
        roleta.style.backgroundColor="#7dbeed"
    }
    if (machine==='scissors'){
        roleta.innerHTML= "&#x270C;"
        roleta.style.backgroundColor="#00a86b"
    }
}
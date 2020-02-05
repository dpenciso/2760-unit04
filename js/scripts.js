document.querySelector('#company').innerText = "Fortune Teller"

document.querySelector('header > h2').innerText = "Switch Statements"

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }



function getMonthName(month) {
    let name
    switch (month) {
        case 1:
            name = "January"
            break;
        case 2:
            name = "February"
            break;
        case 3:
            name = "March"
            break;
        case 4:
            name = "April"
            break;
        case 5:
            name = "May"
            break;
        case 6:
            name = "June"
            break;
        case 7:
            name = "July"
            break;
        case 8:
            name = "August"
            break;
        case 9:
            name = "September"
            break;
        case 10:
            name = "October"
            break;
        case 11:
            name = "November"
            break;
        case 12:
            name = "December"
            break;
        default:
            name = "Not a month"
            break;
    }
    return name
}

function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message = "be featured as the strongest superheo in the next Marvel movie."
            break;
        case 2:
            message = "find a lotto ticket on the ground and win the poweball."
            break;
        case 3:
            message = "save a rich man's life and he will compensate you with riches."
            break;
        case 4:
            message = "invent something that will make you rich beyond your wildest dreams."
            break;
        case 5:
            message = "lose a limb."
            break;
        case 6:
            message = "find a penny on the floor."
            break;
        case 7:
            message = "eat a rotten peanut."
            break;
        case 8:
            message = "forget about an important meeting and get fired from your job."
            break;
        case 9:
            message = "have an absolutely average day."
            break;
        case 10:
            message = "find the love of your life... and not end up with them."
            break;
        case 11:
            message = "forget to brush your teeth."
            break;
        case 12:
            message = "find $100 on the ground."
            break;
        default:
            message = "some sort of error occured."
            break;
    }
    return message
}

let month = getRandomIntInclusive(1, 12)
let fate = getRandomIntInclusive(1, 12)
let day = getRandomIntInclusive(1, 30)

const monthName = getMonthName(month)
const fortune = getFortune(fate)

const fortuneRevealed = `On ${monthName} ${day}, you will ${fortune}`

document.querySelector('#fortune').innerText = fortuneRevealed
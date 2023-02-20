function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }

  const message = {
    ifPart: ['if you see a', 'if you smell a', 'if you hear a'],
    animalPart: ['tiger', 'zebra', 'lion', 'penguin', 'spider'],
    shouldPart: ['you should', 'you must', 'you don´t have to'],
    responsePart: ['run', 'pet it', 'cry', 'tell it a joke', 'watch out']
  }

  let yourMessage = [];

  for(let prop in message){
    let randomMessageIndex = generateRandomNumber(message[prop].length)

  switch(prop){
    case 'ifPart':
        yourMessage.push(message[prop][randomMessageIndex])
        break
    case 'animalPart':
        yourMessage.push(message[prop][randomMessageIndex])
        break
    case 'shouldPart':
        yourMessage.push(message[prop][randomMessageIndex])
        break
    case 'responsePart':
        yourMessage.push(message[prop][randomMessageIndex])
        break
        default:
            yourMessage.push('No animal is currently near you')
    }
  }

  function allStringedTogether(){
    const stringedTogether = yourMessage.join('\n')
    console.log(stringedTogether)
  }

allStringedTogether(yourMessage)



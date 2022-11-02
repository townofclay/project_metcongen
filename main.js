// Get random number (to help randomize output)
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

// Object for all potential metcon ideas
const metconIdeas = {
    timeDomain: ['5 minutes', '10 minutes', '15 minutes', '20 minutes', '30+ minutes'] ,
    metconType: ['an EMOM', 'an AMRAP', '3 rounds', '5 rounds', '10 rounds'],
    repScheme: ['10-9-8-7-6-5-4-3-2-1', '21-15-9', '3-6-9', '15', '100'] ,
    movementType: ['thrusters', 'clean & jerks', 'snatches', 'box jumps', 'burpees'],
    movementType2: ['deadlifts', 'HSPU', 'pull-ups', 'toes-to-bar', 'GHD sit-ups']
}

// Store the metcon in an array
let wod = []

// Iterate over the object
for(let property in metconIdeas) {
    let optionIndex = generateRandomNumber(metconIdeas[property].length)

    // use object's properties to customize workout being added to WOD
    switch(property) {
        case 'timeDomain':
            wod.push(`You have ${metconIdeas[property][optionIndex]}`)
            break
        case 'metconType':
            wod.push(`to complete ${metconIdeas[property][optionIndex]}`)
            break
        case 'repScheme':
            wod.push(`of ${metconIdeas[property][optionIndex]}`)
            break
        case 'movementType':
            wod.push(`${metconIdeas[property][optionIndex]}`)
            break
        case 'movementType2':
            wod.push(`and ${metconIdeas[property][optionIndex]}.`)
            break
        default:
            wod.push('Error: it\'s a rest day.')
    }
}

function formattedWod(inputWod) {
    const formatted = wod.join(' ')
    console.log(formatted)
}


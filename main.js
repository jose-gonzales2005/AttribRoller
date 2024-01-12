const defaultAttribScores = [15, 14, 13, 12, 10, 8];

class Player {
    constructor(characterName = 'Bob') {
        this.name = characterName; 
        this.attributes = {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        };
        let shuffledResult = shuffleArray(defaultAttribScores);
        for (const [key, value] of Object.entries(this.attributes)) {
            let attributeValue = shuffledResult.pop();
            this.attributes[key] = attributeValue;
        }
        
    }

    rollAtrributes() {
        for (const key in this.attributes) {
            let results = diceRoller(4, 6);
            results.sort = (function(a, b){return a - b}); //numeric sort with comparing func
            results.shift(); //removes low dice roll
            let sum = sumArrayElements(results); //sums the rolls
            this.attributes[key] = sum;
        }
    }
    

    printPlayer() {
        console.log(`Name: ${this.name}`);
        for (const [key, value] of Object.entries(this.attributes)) {
            console.log(`${key.slice(0, 3).toUpperCase()}: ${value}`)
        }
    }
}

const player01 = new Player();
player01.printPlayer();
const player02 = new Player('Rob');
player02.rollAtrributes();
player02.printPlayer();

//Fisher-Yates alg for random sorting arrays 
function shuffleArray(targetArray) {
    let shuffled = Array.from(targetArray);
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}

function diceRoller(times, sides) {
    let results = [];
    for (let i = 0; i < times; i++) {
        results.push(Math.floor(Math.random() * sides + 1))
    }
    return results;
}

function sumArrayElements(array) {
    let sum = 0; 
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
    //return array.reduce((total, currentNumber) => total + currentNumber);
}
//cpmmmrent onmmb
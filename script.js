// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             inventory: ['small hat', 'sunglasses']
//         }
//     },

//     roll (mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//         }
//     }




// loop the loops over adventurer inventory and logs them
// for(i = 0; i < adventurer['inventory'].length; i++){
//     console.log(adventurer['inventory'][i]);
// }


// adventurer.roll();
// adventurer.roll();
// adventurer.roll();


//create a Character class

class Character {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.inventory = [];
        

    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }

    static max_health = 100;
}

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// robin.companion.roll();
// robin.companion.companion.roll();


// creating inherited classes from character

class Adventurer extends Character {
    constructor(name,role){
        super(name);
        // check to make sure that the role picked is apart of roles array
        if(!Adventurer.roles.includes(role)){
            throw new Error("Pick a valid role!");
        }
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
    }
    scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    static roles = ["Fighter", "Healer", "Wizard"];

    duel (adventurer) {
        // migth need to recreate roll and store results ina variable and then compare

        while(true){
            let adv_roll = Math.floor(Math.random() * 20) + 1;
            let opp_roll = Math.floor(Math.random() * 20) + 1;
            if(adv_roll > opp_roll){
                adventurer.health = adventurer.health - 5;
                console.log(`${this.name} rolled a ${adv_roll} and ${adventurer.name} rolled a ${opp_roll}`);
                console.log(`${this.name} health is ${this.health} and ${adventurer.name} health is ${adventurer.health}`);


            } else if (opp_roll > adv_roll){
                this.health = this.health - 5;
                console.log(`${this.name} rolled a ${adv_roll} and ${adventurer.name} rolled a ${opp_roll}`);
                console.log(`${this.name} health is ${this.health} and ${adventurer.name} health is ${adventurer.health}`);
            }

            if(adventurer.health <= 50){
                console.log(`${adventurer.name} health is ${adventurer.health}. ${this.name} is the Winner`)
                break;
            } else if(this.health <= 50){
                console.log(`${this.name} health is ${this.health}. ${adventurer.name} is the Winner!`)
                break;
            }


        }
        
}
}
class Companion extends Character {
    constructor(name, type){
        super(name);
        this.type = type;
        this.inventory = [];
    }
}



const robin = new Adventurer("Robin", "Fighter");
robin.inventory = ["sword", "potion", "artifact"];
const leo = new Companion("Leo", "Cat");
const frank = new Companion("Frank", "Flea");
frank.inventory = ["small hat", "sunglasses"];
const bigJon = new Adventurer("Big John", "Wizard")
const jordan = new Adventurer("Jordan the Giant Slayer", "Fighter")

// robin.duel(bigJon);
// bigJon.duel(robin)
// jordan.duel(bigJon)
let humans =
{
    name : "",
    race : "human",
    maxHealth: 100,
    startHealth: 100,
    currentHealth: 100,
    maxDamage: 20,
    maxHealing: 30,
    damageTaken: 0.8,
    reflectChance: 0,
    lifeSteal: 0,
    item: "",
    dodgeChance: 0,
    bonusHeal: 0,
    bonusDamage: 0,
    attackTwiceChance: 0,
}
let orcs =
{
    name: "",
    race: "orc",
    maxHealth: 140,
    startHealth: 140,
    currentHealth : 140,
    maxDamage: 20,
    maxHealing: 30,
    damageTaken: 1,
    reflectChance: 0,
    lifeSteal: 0,
    item: "",
    dodgeChance: 0,
    bonusHeal: 0,
    bonusDamage: 0,
    attackTwiceChance: 0,
}
let elfs = 
{
    name : "",
    race : "elf",
    maxHealth : 100,
	startHealth : 100,
    currentHealth : 100,
    maxDamage : 20,
	maxHealing : 30,
	damageTaken : 1,
	reflectChance : 0.3,
    lifeSteal : 0,
    item: "",
    dodgeChance: 0,
    bonusHeal: 0,
    bonusDamage: 0,
    attackTwiceChance: 0,
}
let vampires =
{
    name : "",
    race : "vampire",
    maxHealth : 100,
	startHealth : 100,
    currentHealth : 100,
    maxDamage : 20,
	maxHealing : 30,
	damageTaken : 1,
	reflectChance : 0,
    lifeSteal : 0.1,
    item: "",
    dodgeChance: 0,
    bonusHeal: 0,
    bonusDamage: 0,
    attackTwiceChance: 0,
};

let p1 = new Object();
let p2 = new Object();

// Début de la création du P1
document.getElementById("rhum1").addEventListener("click", () => {

    p1 = {...humans};

});

document.getElementById("rorc1").addEventListener("click", () => {

    p1 = {...orcs};

});

document.getElementById("relf1").addEventListener("click", () => {

    p1 = {...elfs};

});

document.getElementById("rvamp1").addEventListener("click", () => {

    p1 = {...vampires}

});

document.getElementById("bootsp1").addEventListener("click", () => {

    p1.item = "boots";

});

document.getElementById("staffp1").addEventListener("click", () => {

    p1.item = "staff";

});

document.getElementById("swordp1").addEventListener("click", () => {

    p1.item = "sword";

});

document.getElementById("bowp1").addEventListener("click", () => {

    p1.item = "bow";

});
// Fin de la création du P1

// Début création P2
document.getElementById("rhum2").addEventListener("click", () => {

    p2 = {...humans};

});

document.getElementById("rorc2").addEventListener("click", () => {

    p2 = {...orcs};

});

document.getElementById("relf2").addEventListener("click", () => {

    p2 = {...elfs};

});

document.getElementById("rvamp2").addEventListener("click", () => {

    p2 = {...vampires};

});

document.getElementById("bootsp2").addEventListener("click", () => {

    p2.item = "boots";

});

document.getElementById("staffp2").addEventListener("click", () => {

    p2.item = "staff";

});

document.getElementById("swordp2").addEventListener("click", () => {

    p2.item = "sword";

});

document.getElementById("bowp2").addEventListener("click", () => {

    p2.item = "bow";

});
// fin création P2
let turn = 1;
// Fonction qui valide la création des personnages et lance le combat
function checkCreation(player1, player2){
    
    if (player1.name == "" || player1.race == null || player1.item == "" || player2.name == "" || player2.race == null || player2.item == ""){
        
        alert("All fields are required !")
    
    } else {
        
        playerProfil()
        item(p1);
        item(p2);
        document.getElementById("cp1name").innerHTML = (p1.name);
        document.getElementById("cp2name").innerHTML = (p2.name);
        document.getElementById("fightscreen").style.display = "none";
        document.getElementById("combatlog").style.display = "block";
        document.getElementById("hpp1").innerHTML = "100%";
        document.getElementById("hpp2").innerHTML = "100%";
        textLog(`Player 1 name is ${p1.name} and he is playing the race of ${p1.race} equiped with : ${p1.item}.`);
        textLog(`Player 2 name is ${p2.name} and he is playing the race of ${p2.race} equiped with : ${p2.item}.`)
        start();
    }
}
// Fonction pour généré un entier positif entre min et max (inclus)
function randomIntGen(min, max){
    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) ) + min;

}
// Random décision pour le joueur qui commence
function start(){

    let chance = randomIntGen(1, 2)

    if (chance == 1){
        document.getElementById("fightbuttonp2").style.display = "none";
    } else {
        document.getElementById("fightbuttonp1").style.display = "none";
    }
}
// Fonction qui modifie les multiplicateurs au joueur en fonction de l'item sélectionné
function item(player){
    
    switch(player.item){
    
        case "boots":
            player.dodgeChance = 0.3;
            break;
    
        case "staff":
            player.bonusHeal = 0.2;
        break;

        case "sword":
            player.bonusDamage = 0.3;
            break;

        case "bow":
            player.attackTwiceChance = 0.3;
            break;
    }
}
// Fonction pour sélectionner l'image de profil de l'écran de combat
function playerProfil(){
    
    switch (p1.race) {

        case "human":
            document.getElementById("imgpp1").src = "images/humanp.png";
            break;

        case "orc":
            document.getElementById("imgpp1").src = "images/orcp.png";
            break;

        case "elf":
            document.getElementById("imgpp1").src = "images/elfp.png";
            break;

        case "vampire":
            document.getElementById("imgpp1").src = "images/vampp.png";
            break;
    }

    switch (p2.race) {
        
        case "human":
            document.getElementById("imgpp2").src = "images/humanp.png";
            break;
        
        case "orc":
            document.getElementById("imgpp2").src = "images/orcp.png";
            break;
    
        case "elf":
            document.getElementById("imgpp2").src = "images/elfp.png";
            break;

        case "vampire":
            document.getElementById("imgpp2").src = "images/vampp.png";
            break;
    }
}
// Fonction pour générer le textLog du combat
function textLog(text){
    
    document.getElementById("textlog").innerHTML += "<div>" + text + "</div>";
    var elem = document.getElementById('textlog');
    elem.scrollTop = elem.scrollHeight;

}
// Lance le combat
document.getElementById("start").addEventListener("click", () => {
    
    p1.name = (document.getElementById("p1name").value);
    p2.name = (document.getElementById("p2name").value);
    checkCreation(p1,p2);

});
// Fonction check de fin de tour pour savoir si un des joueurs est gagnant
function winLose(attacker,defender){
    
    if(attacker.currentHealth <= 0){
        
        attacker.currentHealth = 0;
        document.getElementById("fightbuttonp1").style.display = "none";
        document.getElementById("fightbuttonp2").style.display = "none";
        document.getElementById("tryagain").style.display= "block";
        textLog(`<font color ="#336600" size="20px"> ${defender.name} win the fight !</font>`);
        
        if(attacker == p1){
            
            document.getElementById("imgpp1").style.filter = "grayscale(100%)";
            document.getElementById("imgpp2").style.transform = "scale(1.25)";
        
        } 
        else {
          
            document.getElementById("imgpp2").style.filter = "grayscale(100%)";
            document.getElementById("imgpp1").style.transform = "scale(1.25)";
        
        }
    }

    if(defender.currentHealth <= 0){
        
        defender.currentHealth = 0;
        document.getElementById("fightbuttonp1").style.display = "none";
        document.getElementById("fightbuttonp2").style.display = "none";
        document.getElementById("tryagain").style.display= "block";
        textLog(`<font color ="#336600" size="20px"> ${attacker.name} win the fight !</font>`);
        
        if(defender == p1){
        
            document.getElementById("imgpp1").style.filter = "grayscale(100%)";
            document.getElementById("imgpp2").style.transform = "scale(1.25)";
        
        } else {
        
            document.getElementById("imgpp2").style.filter = "grayscale(100%)";
            document.getElementById("imgpp1").style.transform = "scale(1.25)";
        
        }
    }
}
// Fonction Heal standard
function heal(attacker,defender){

    let heals = randomIntGen(1, 30) + Math.floor((randomIntGen(1, 30)*attacker.bonusHeal));
    attacker.currentHealth += heals;

    if(attacker.currentHealth > attacker.maxHealth){
        
        let depasse = heals - (attacker.currentHealth - attacker.maxHealth)
        attacker.currentHealth = attacker.maxHealth;
        textLog(`${attacker.name} can't heal himself for more than 100%. <font color="#336600"> ${depasse}HP </font>gained.`)
    } else {

        textLog(`${attacker.name} heals himself for <font color="#336600">${heals} HP</font>. He has now <font color="green">${attacker.currentHealth}HP</font>.`)}
        vampireCheck(attacker,defender)

        if(attacker.currentHealth <= 0){
        
            attacker.currentHealth = 0;
        
        }

        if(defender.currentHealth <= 0){
        
            defender.currentHealth = 0;
        }

return attacker.currentHealth;

}
// Si l'ennemi est un vampire (en cas de tour passer ou d'attaque)
function vampireCheck(attacker, defender){
    
    if (defender.lifeSteal != 0){
        
        let stolenLife;

        if(attacker.currentHealth >= 5){
        
            stolenLife = Math.round((attacker.currentHealth)*defender.lifeSteal);
            attacker.currentHealth -= stolenLife;
            defender.currentHealth += stolenLife;
        
        } else {
            
            stolenLife = Math.ceil((attacker.currentHealth)*defender.lifeSteal);
            attacker.currentHealth -= stolenLife;
            defender.currentHealth += stolenLife;
        
        }


        if(defender.currentHealth > defender.maxHealth){
        
            defender.currentHealth = defender.maxHealth;
            textLog(`${defender.name} can't steal more from ${attacker.name} but causes him<font color = "red">${stolenLife} damage(s)</font>.`)
        
        } else {
            
            textLog(`${defender.name} <font color = "orange">steals ${stolenLife} HP</font> from ${attacker.name}.`)
        
        }
    }
    
return attacker.currentHealth;

}
// Mise à jour de la barre de vie des joueurs
function hpUpdate(){

    document.getElementById("hpp1").style.width = (p1.currentHealth/p1.maxHealth)*100 + "%";
    document.getElementById("hpp1").innerHTML = Math.floor((p1.currentHealth/p1.maxHealth)*100) + "%";
    document.getElementById("hpp2").style.width = (p2.currentHealth/p2.maxHealth)*100 + "%";
    document.getElementById("hpp2").innerHTML = Math.floor((p2.currentHealth/p2.maxHealth)*100) + "%";

}
// Fonction d'attaque
function attack(attacker, defender){
    
    damage = randomIntGen(1, 20) + Math.floor((randomIntGen(1, 20)*attacker.bonusDamage));
    twiceshot = false;
    dodgeDam = false;

    switch(attacker.item){
        
        case "bow":
            attackTwice(attacker,defender)
        break;
    
    }

    switch(defender.item){
        
        case "boots": 
            dodgeChance(attacker,defender);
        break;
    
    }

    switch(defender.race){
        
        case "human": 
            damage = Math.floor(damage *(defender.damageTaken));
        break;
        
        case "elf":
            if(dodgeDam == false){
                counter(attacker, defender)
            };
    }

    defender.currentHealth -= damage
    textLog(`${defender.name} takes <font color = "red">${damage} damage(s)</font>.`)
    vampireCheck(attacker,defender)
    
    if(attacker.currentHealth <= 0){
    
        attacker.currentHealth = 0;
    
    }

    if(defender.currentHealth <= 0){
    
        defender.currentHealth = 0;
    
    }

};
// Chance de dodge
function dodgeChance(attacker,defender){
    let dodge = Math.floor(Math.random()* 100);

    if (dodge <= 29){
        
        damage = 0;
        textLog(`${defender.name} <font color = "orange">dodges</font> the attack.`)
        return dodgeDam = true;
    
    }
};
// Chance d'attaquer 2 fois
function attackTwice(attacker, defender){
    let twice = Math.floor(Math.random()* 100);

    if (twice <= 29){
        
        textLog(`The attack of ${attacker.name} was launched <font color= "orange"> twice </font> !`);
        damage *= 2
        return twiceshot = true
    
    }

};
// Chance de contrer l'attaque
function counter(attacker, defender) {

    backhit = Math.floor(Math.random() * (100));

        if (backhit <=29) {

            damage = Math.round(damage/2);
            attacker.currentHealth -= damage;
            textLog(`${defender.name} <font color = "orange">counters the attack</font> from ${attacker.name} and causes him  <font color="red">  ${damage} damage(s).</font>`)
            damage=0;

        } 
}
// Un eventlistener / bouton
document.getElementById("p1heal").addEventListener("click",() => {

    textLog(`<font color = "grey">Round ${turn}</font> :`);
    heal(p1,p2);
    hpUpdate();
    document.getElementById("fightbuttonp1").style.display = "none";
    document.getElementById("fightbuttonp2").style.display = "flex";
    winLose(p1,p2);
    turn ++

});

document.getElementById("p2heal").addEventListener("click",() => {
    
    textLog(`<font color = "grey">Round ${turn}</font> :`);
    heal(p2,p1);
    hpUpdate();
    document.getElementById("fightbuttonp1").style.display = "flex";
    document.getElementById("fightbuttonp2").style.display = "none";
    winLose(p2,p1);
    turn ++;

});

document.getElementById("p1pass").addEventListener("click",() => {
    
    textLog(`<font color = "grey">Round ${turn}</font> :`);
    vampireCheck(p1,p2);
    hpUpdate();
    document.getElementById("fightbuttonp1").style.display = "none";
    document.getElementById("fightbuttonp2").style.display = "flex";
    winLose(p1,p2);
    turn ++;
    textLog(`${p1.name} pass.`)

});

document.getElementById("p2pass").addEventListener("click",() => {
    
    textLog(`<font color = "grey">Round ${turn}</font> :`);
    vampireCheck(p2,p1);
    hpUpdate();
    document.getElementById("fightbuttonp1").style.display = "flex";
    document.getElementById("fightbuttonp2").style.display = "none";
    winLose(p2,p1);
    turn ++
    textLog(`${p2.name} pass.`) 

});

document.getElementById("p1attack").addEventListener("click",() => {
    
    textLog(`<font color = "grey">Round ${turn}</font> :`);
    attack(p1,p2);
    hpUpdate();
    document.getElementById("fightbuttonp1").style.display = "none";
    document.getElementById("fightbuttonp2").style.display = "flex";
    winLose(p1,p2);
    turn ++;

});

document.getElementById("p2attack").addEventListener("click",() => {
    
    textLog(`<font color = "grey">Round ${turn}</font> :`); 
    attack(p2,p1);
    hpUpdate();
    document.getElementById("fightbuttonp1").style.display = "flex";
    document.getElementById("fightbuttonp2").style.display = "none";
    winLose(p2,p1);
    turn ++

});

document.getElementById("tryagain").addEventListener("click",() => {

    location.reload();

})
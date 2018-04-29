//var name = "Death-Star"
//var health = 100
//var hits = 0

//var xwing = new player("Xwing")
var Deathstar = new player2("Deathstar")

//function player(Xwing){
//    this.Xwing = Xwing;
//    this.health = 100;
//    this.hits = 0;
//};

function player2(Deathstar){
    this.Deathstar = Deathstar;
    this.health = 100;
    this.hits = 1;
};

function Attack(ammo){
    this.ammo = ammo
}

var ammo = (laser, canon, photon){
    this.laser = laser;
    this.canon = canon;
    this.photon = photon;
}

function attack(laser){
    Deathstar.health -= 1;
    Deathstar.hits +1
    update()
}

function attack(canon){
    Deathstar.health -= 5;
    Deathstar.hits +1
    update()
}

function attack(photon){
    Deathstar.health -= 10;
    Deathstar.hits +1
    update()
}

var items = {
    laser: new item("Laser"),
    canon: new item ("Canon"),
    photon: new item ("Photon"),
    tiefighter: new item ("Tie Fighter"),
    stardestroyer:new item ("Star Destroyer"),
    shield: new item ("Shield"),
}

function defense=(avoid){
    this.avoid = avoid
}

var avoid = function(tiefighter, stardestroyer, shield){
    this.tiefighter = tiefighter;
    this.stardestroyer = stardestroyer;
    this.shield = shield;
}



function defense(tiefighter){
    Deathstar.health += 1;
    Deathstar.hits += 1;
    update();
}



function defense(stardestroyer){
    Deathstar.health += 2;
    Deathstar.hits += 2;
    update();
}



function defense(shield){
    Deathstar.health += 3;
    Deathstar.hits += 3;
    update();
}



var laser = new Attack(-1)
var canon = new Attack(-5)
var Photon = new Attack(-10)


function update(){

    document.getElementById("health").innerText=`${this.health}`;
    document.getElementById("name").innerText=`${this.name}`;
    document.getElementById("hits").innerText=`${this.hits}`;
    
}





update();




//function slap(){
//    health -= 1;
//    hits += 1;
//    update();
//}

//function slap2(){
//    health -= 5;
//    hits += 1;
//    update();
//}

//function slap3(){
//    health -= 10;
//    hits += 1;
//    update();
//}


// var me = {
//    modifiers:[{name: 'modify1'}]
// }


// var modifiers = {
//    mod1: {name: "modifiers1}"};
//   }



// function modify1(){
//    me.modifiers.push(modifiers.mod1)  
//        draw()
// }


//  function addMods(){
//    for (let i = 0; i < me.modifiers.length; index++) {
//       let mod = me.modifiers[i];
//      total+= mod.name + ","       
//    }    
//  return total
//  }

//  function draw(){
//    var results = addMods()
//    document.getElementById('modifiers').innerText = results
//  }

// var slap1(){
//    me.health -=5 + addMods()    
//  }
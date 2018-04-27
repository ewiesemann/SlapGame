//var name = "Death-Star"
//var health = 100
//var hits = 0

var xwing = new Player("XWing")

function slap(){
    health -= 1;
    hits += 1;
    update();
}

function slap2(){
    health -= 5;
    hits += 1;
    update();
}

function slap3(){
    health -= 10;
    hits += 1;
    update();
}

function update(){

    document.getElementById("health").innerText=`${health}`;
    document.getElementById("name").innerText=`${name}`;
    document.getElementById("hits").innerText=`${hits}`;
    
}

function Player(name){
    this.name = name
    this.health = 100
    this.hits = 0
}

function Attack(dmg){
    this.dmg = dmg
}

var laser = new Attack(-1)
var canon = new Attack(-5)
var Photon = new Attack(-10)

function Defense(dfs){
    this.dfs = dfs
}

var dive = new Defense(1)
var roll = new Defense (5)
var shield = new Defense (10)



update();

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
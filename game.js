
 // This ection is for the Enemy creation
    
    var enemy = new Enemy(100, "Death Star")

    function Enemy(health, name) {
        this.health = health;
        this.name = name;
        this.hits = 0;
        this.equip = [];
        
    
    };

//This section is for Items
    

    function Item(name, modifier, description) {
        this.name = name;
        this.mod = modifier;
        this.descript = description;
     };
    
     
     var items = {
         tiefighter: new Item("Tie Fighters", 0.3, "Short range fighter"),
         stardestroyer: new Item ("Star Destroyer", 1.5, "Heavy warship"),
         shield: new Item ("Shield", 5, "Whole base damage reduction"),
         
        };

//This is for slapping (damage to enemy)

    function slap(){
        enemy.health -= 1;
        enemy.hits += 1;
        update();
    };
    
    function slap2(){
        enemy.health -= 5;
        enemy.hits += 1;
        update();
    };
    
    function slap3(){
        enemy.health -= 10;
        enemy.hits += 1;
        update();
    };

//This is to update the current in game values
    function update(){
        document.getElementById("health").innerText =`${enemy.health}`
        document.getElementById("name").innerText=`${enemy.name}`;
        document.getElementById("hits").innerText=`${enemy.hits}`;
    };
        
    

function giveShield(){
    enemy.equip.push(items.shield);
    update();
}

function giveTie(){
    enemy.equip.push(items.tiefighter);
    update();
}

function giveDestroyer(){
    enemy.equip.push(items.stardestroyer);
    update();
}

function addMods() {
    for (let i = 0; i < enemy.equip.length; i++) {
        let mod = enemy.equip[i];
    }
}


    update();
    
    
    
    
    
    
    
    
    
    
    //var name = "Death-Star"
    //var health = 100
    //var hits = 0
    
    //var xwing = new player("Xwing")
    
    //function player(Xwing){
        //    this.Xwing = Xwing;
        //    this.health = 100;
        //    this.hits = 0;
        //};
    /** 
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
*/


//var laser = new Attack(-1)
//var canon = new Attack(-5)
//var Photon = new Attack(-10)








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
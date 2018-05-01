
// This ection is for the Enemy creation

var enemy = new Enemy(100, "Death Star")

function Enemy(health, name) {
    this.health = health;
    this.name = name;
    this.hits = 0;
    this.equip = [];
    this.modCount = 0;

};

//This section is for Items


function Item(name, modifier, description) {
    this.name = name;
    this.mod = modifier;
    this.descript = description;
};


var items = {
    tiefighter: new Item("Tie Fighters", 1, "Short range fighter"),
    stardestroyer: new Item("Star Destroyer", 2, "Heavy warship"),
    shield: new Item("Shield", 5, "Whole base damage reduction"),

};

//This section is for the damage reduction modifiers

//How could you combine these three into one function using [] notation? hint: function giveItem(type) { var item = items[type].mod }
function giveShield() {
    enemy.equip.push(items.shield.mod);
    dmgReduce();
    update();
}

function giveTie() {
    enemy.equip.push(items.tiefighter.mod);
    dmgReduce();
    update();
}

function giveDestroyer() {
    enemy.equip.push(items.stardestroyer.mod);
    dmgReduce();
    update();
}
//you empty the array as soon as you add a new item to it, maybe a better way to do this process, either just add the item to modCount from the start, or perhaps leave them in the array and do this portion every attack
function dmgReduce() {
    var count = 0;
    for (var i in enemy.equip) {
        count += enemy.equip[i];
    };
    enemy.modCount += count;
    enemy.equip = [];
}
//This is for slapping (damage to enemy)

//similar to above how could these become one function? attack(type)
function slap() {
    if (enemy.modCount < 10) {
        var newHit = 1 - enemy.modCount;
        enemy.health -= newHit;
    };
    enemy.modCount -= 1;
    if(enemy.modCount < 0){
        enemy.modCount =0
    }
    enemy.hits += 1;
    update();
};

function slap2() {
    if (enemy.modCount < 10) {
        var newHit = 5 - enemy.modCount;
        enemy.health -= newHit;
    };
    enemy.modCount -= 5;
    if(enemy.modCount < 0){
        enemy.modCount =0
    }
    enemy.hits += 1;
    update();
};

function slap3() {
    if (enemy.modCount < 10) {
        var newHit = 10 - enemy.modCount;
        enemy.health -= newHit;
    };
    enemy.modCount -= 10;
    if(enemy.modCount < 0){
        enemy.modCount =0
    }
    enemy.hits += 1;
    update();
};

//This is to update the current in game values
function update() {
    document.getElementById("health").innerText = `${enemy.health}`
    document.getElementById("name").innerText = `${enemy.name}`;
    document.getElementById("hits").innerText = `${enemy.hits}`;
};

update();










    
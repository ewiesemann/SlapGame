
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

//This is for slapping (damage to enemy)

function slap() {
    if (enemy.modCount < 10) {
        var newHit = 1 - enemy.modCount;
        enemy.health -= newHit;
    };
    enemy.modCount -= 1;
    enemy.hits += 1;
    update();
};

function slap2() {
    if (enemy.modCount < 10) {
        var newHit = 5 - enemy.modCount;
        enemy.health -= newHit;
    };
    enemy.modCount -= 5;
    enemy.hits += 1;
    update();
};

function slap3() {
    if (enemy.modCount < 10) {
        var newHit = 10 - enemy.modCount;
        enemy.health -= newHit;
    };
    enemy.modCount -= 10;
    enemy.hits += 1;
    update();
};

//This is to update the current in game values
function update() {
    document.getElementById("health").innerText = `${enemy.health}`
    document.getElementById("name").innerText = `${enemy.name}`;
    document.getElementById("hits").innerText = `${enemy.hits}`;
};


//This section is for the damage reduction modifiers
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

function dmgReduce() {
    var count = 0;
    for (var i in enemy.equip) {
        count += enemy.equip[i];
    };
    enemy.modCount += count;
    enemy.equip = [];
}

update();










    
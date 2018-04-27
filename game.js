var name = "Death-Star"
var health = 100
var hits = 0

function slap(){
    health -= 1;
    hits += 1;
    //alert(health);
    update();
}

function slap2(){
    health -= 5;s
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


update();

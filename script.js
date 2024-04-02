// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let userAP = 100;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function arcaneScepterAttack(event){
    // fungusHP -= 14;
    // userAP -= 12
    if(fungusHP > 0 && userAP >= 12){
        let currentAP = document.getElementsByClassName("ap-text")

        let currentApMeter = document.getElementById("ap-meter")
        currentApMeter.value -= 12

        // let currentHP = document.getElementsByClassName("hp-text")
        let currentHP = document.getElementById("HP-NUMBER");
        let updatedHP = (Number(currentHP.innerHTML) - 14)

        let currentHpMeter = document.getElementById("hp-meter")
        currentHpMeter.value -= 14
    }
}


// let currentHP = document.getElementById("HP-NUMBER").innerHTML;
// currentHP.innerHTML - 14





// let currentHP = document.querySelector('.hp-text');
// let textContentHP = currentHP.textContent
// let parts = textContentHP.split(' ');
// console.log(parts[0] - 14)







// function entangleAttack(){

// }
// function dragonBladeAttack(){

// }
// function starFireAttack(){

// }
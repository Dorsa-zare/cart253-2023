/**
 * Project 2 prototype
 * Dorsa Zare
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let state = "title";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
}


/**
 * Description of draw()
*/
function draw() {

    if (state === "title") {
        title();
      } else if (state === "instruction") {
        instruction();
      } else if (state === "customizePet") {
        customizePet();
      }
    }


    function title() {
    // Display the title and "Press here to start" message
    background(180,200,150);
    displayTitleText();
    }

    function displayTitleText() {
        textSize(50);
        textAlign(CENTER, CENTER);
        fill(0);
        text("Emotional Support Pet", width / 2, height / 2 - 50);
        textSize(20);
        text("Press here to start", width / 2, height / 2 + 50);
    }

    function mousePressed() {
        if (state === "title") {
            // Transition to the instruction state when the user clicks on the title screen
            state = "instruction";
        } else if (state === "instruction") {
            // Check if the user clicks on the "Press here to customize your pet" text
            let customizePetButtonX = width / 2 - 150;
            let customizePetButtonY = height / 2 + 90;
            let customizePetButtonWidth = 300;
            let customizePetButtonHeight = 40;
    
            if (mouseX > customizePetButtonX && mouseX < customizePetButtonX + customizePetButtonWidth &&
                mouseY > customizePetButtonY && mouseY < customizePetButtonY + customizePetButtonHeight) {
                // Transition to the customizePet state
                state = "customizePet";
            }
        }
    }

      function instruction() {
        background(180,200,150);
        textSize(28);
        textAlign(CENTER, CENTER);
        fill(0);
        text(`Have fun interacting with your virtual companion and
         watch how it responds to your emotions. 
         Don't forget to customize your pet's look to make it your own. 
         Enjoy exploring the world of emotional well-being in this interactive experience!`, width / 2, height / 2 - 50);
        textSize(20);
        text("Press here to customize your pet", width / 2, height / 2 + 90);
      }


      function customizePet() {

      }

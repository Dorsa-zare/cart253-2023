/**
 * Project 1
 * Dorsa zare
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */
let state = "title";
let cleaningBackground;
let plantingBackground;
let image1;
let image2;
let trashImages = []; // Array to store trash images
let trashPositions = []; // Array to store trash positions
let trashSize = 80; // Size of the trash images
let binImage;
let handImage; 


"use strict";


/**
 * Description of preload
*/
function preload() {
    cleaningBackground = loadImage("assets/images/beach.png"); // Load the cleaning background image
    plantingBackground = loadImage("assets/images/garden.png"); // Load the planting background image
    image1 = loadImage("assets/images/optionone.png"); // Load the first image
    image2 = loadImage("assets/images/optiontwo.png"); // Load the second image
   
    binImage = loadImage("assets/images/bin.png"); // Load the bin image)
    handImage = loadImage("assets/images/hand.png");  // Load the hand image
   

    //Trash1 image and its position
    trashImages.push(loadImage("assets/images/trash1.png"));
    trashPositions.push({ x: 150, y: 200 });
    //Trash2 image and its position
    trashImages.push(loadImage("assets/images/trash2.png"));
   trashPositions.push({ x: 350, y: 300 });
   //Trash3 image and its position  
   trashImages.push(loadImage("assets/images/trash3.png"));
   trashPositions.push({ x: 500, y: 450 });
    //Trash4 image and its position  
    trashImages.push(loadImage("assets/images/trash4.png"));
   trashPositions.push({ x: 560, y: 280 });
   //Trash5 image and its position
   trashImages.push(loadImage("assets/images/trash5.png"));
   trashPositions.push({ x: 750, y: 430 });
    //Trash6 image and its position
    trashImages.push(loadImage("assets/images/trash6.png"));
    trashPositions.push({ x: 950, y: 340 });
    //Trash7 image and its position
    trashImages.push(loadImage("assets/images/trash7.png"));
    trashPositions.push({ x: 1050, y: 250 });
  }


/**
 * Description of setup
*/
function setup() {
    // Create a canvas that fills the entire screen
    createCanvas(windowWidth, windowHeight);
}


/**
 * Description of draw()
*/
function draw() {

    background(161, 199, 129);
    
    if (state === "title") {
        title();
      } else if (state === "menu") {
        menu();
      } else if (state === "cleaning") {
        cleaning();
      } else if (state === "planting") {
        planting();
      }
    }


      function title() {
        drawTitleText();
        drawStartPrompt();
        checkKeyPressToMenu();
      }

      function drawTitleText() {
        push();
        textSize(60);
        fill(70, 110, 80);
        textAlign(CENTER, CENTER);
        text(" Save the environment! ", width / 2, height / 2 - 30);
        pop();
      }
      
      function drawStartPrompt() {
        push();
        textSize(25);
        fill(255);
        textAlign(CENTER, CENTER);
        text("Press Spacebar to start", width / 2, height / 2 + 80);
        pop();
      }

       function checkKeyPressToMenu() {
        // Check for spacebar key press to transition to the "menu" state
        if (keyIsPressed && key === ' ') {
            state = "menu";
            }
        }

      function menu() {
        background(161, 199, 129);

        // Display menu options with images above
        displayMenuImages(); 
        displayMenuOptions(); // Display menu options
        checkMenuSelection();  // Check for user input to select an option
      }

      function displayMenuImages() {
        // Load and display the first image above the left option
        image(image1, width / 2 - 300, height / 2 - 100, 200, 200);
        image(image2, width / 2 + 100, height / 2 - 100, 200, 200);
      }

      function displayMenuOptions() {
        let rectWidth = 260;
        let rectHeight = 65;
        let spacing = 130; // Spacing between the boxes

        // Calculate the x-coordinates for the left and right boxes
        let leftX = width / 2 - rectWidth - spacing / 2;
        let rightX = width / 2 + spacing / 2;
         
        // Calculate the y-coordinate for the boxes (lower position)
        let boxY = height / 2 + 120; 

        // Title
        textSize(35);
        fill(255);
        textAlign(CENTER, CENTER);
        text("How are you going to save the environment today?", width / 2, height / 2 - 160);

        // Draw the left rectangle box
        fill(255);
        rect(leftX, boxY, rectWidth, rectHeight, 10);
        
        // Draw the right rectangle box
        fill(255);
        rect(rightX, boxY, rectWidth, rectHeight, 10);

        // Text for the left option
        textSize(25);
        noStroke();
        fill(100, 130, 100);
        textAlign(CENTER, CENTER);
        text("1. Clean Garbage", leftX + rectWidth / 2, boxY + rectHeight / 2);
    
        // Text for the right option
        textSize(25);
        fill(100, 130, 100);
        textAlign(CENTER, CENTER);
        text("2. Plant Trees",  rightX + rectWidth / 2, boxY + rectHeight / 2);
      }


      function checkMenuSelection() {
        // Check for user input to select an option
        if (keyIsPressed) {
          if (key === '1') {
            // Transition to the "cleaning" state for cleaning garbage
            state = "cleaning";
          } else if (key === '2') {
            // Transition to the "planting" state for planting trees
            state = "planting";
          }
        }
      }


      function cleaning() {
    
    // Hide the default cursor
    noCursor();

    // Draw the cleaning background image as the background
    image(cleaningBackground, 0, 0, width, height);

  
    //Display bin
    image(binImage, 80, 360, 200, 200);

     // Display each trash image at its specified position
  for (let i = 0; i < trashImages.length; i++) {
    image(trashImages[i], trashPositions[i].x, trashPositions[i].y, trashSize, trashSize);
  }

     // Use the user's mouse position to display the hand image
     image(handImage, mouseX, mouseY, 100, 100);
}  


function planting() {
    // Draw the planting background image as the background
    image(plantingBackground, 0, 0, width, height);
  };
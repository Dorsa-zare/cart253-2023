/**
 * 
 * Project 1  "Save the Environment"
 * Dorsa zare
 * 
 * "Save the Environment" is a fun simulation game designed to show you just how easy it is to make a positive impact on our planet.
 *  With interactive challenges, you'll learn and practice simple actions that help preserve our environment.
 *  The game features original graphics and images created by myself, adding a personal touch to your journey.
    In the game, you'll be tasked with various environmental challenges, such as cleaning up trash from a beach or planting trees in a garden.
    By clicking, dragging, and releasing, you can easily pick up trash or plant trees.
    The game is designed to be both enjoyable and educational, teaching you how small actions can have a big impact.
 * 
 * 
 */


let state = "title";
// Variables related to title
let sadEarthImage;
let titleTextImage;

// Variables related to menu
let cleanGarbageImage;
let plantTreesImage;


// Variables related to cleaning
let cleaningBackground;
let cleaningInstructionImage;
let startCleaningImage;
let trashImages = []; // Array to store trash images
let trashPositions = []; // Array to store trash positions
let trashSize = 80; // Size of the trash images
let binImage;
let handImage; 
let isDraggingTrash = false;
let draggedTrashIndex = -1;

// Variables related to planting
let plantingBackground;
let image1;
let image2;
let plantingInstructionImage;
let startPlantingImage;
let plantImage; 
let plantedPlants = []; // Array to store plant positions
let plantingText = "Whenever you're done planting, press Enter.";
let enterPressed = false;

// Bird variable
let birdImage;
let bird = {
    x: 0,         // Initial x position (start from the right)
    y: 0,         // Random initial y position
    speed: 5       
};

// Water variable
let waterImage;
let water = {
    x: 0,        // Starting X position
    y: 50,       // Y position (50, 140, ...)
    speed: 2, 
    minY: 50,    // Minimum Y position
    maxY: 320,   // Maximum Y position
    direction: 1, // Direction: 1 for down, -1 for up
};

"use strict";


/**
 * Description of preload
*/
function preload() {
     // Load background images
    cleaningBackground = loadImage("assets/images/beach.png"); // Load the cleaning background image
    plantingBackground = loadImage("assets/images/garden.png"); // Load the planting background image

     // Load title page images
     sadEarthImage = loadImage("assets/images/sadearth.png") // Load the sad earth image
     titleTextImage = loadImage("assets/images/titletext.png") // Load the title image
    
     // Load menu images
    image1 = loadImage("assets/images/optionone.png"); // Load the first image
    image2 = loadImage("assets/images/optiontwo.png"); // Load the second image
    cleanGarbageImage = loadImage("assets/images/cleangarbage.png"); // Load the clean garbage text image
    plantTreesImage = loadImage("assets/images/planttrees.png"); // Load the plant trees text image

    // Load cleaning-related images
    cleaningInstructionImage = loadImage("assets/images/cleaninginstruction.png");
    startCleaningImage = loadImage("assets/images/startcleaning.png");
    binImage = loadImage("assets/images/bin.png"); // Load the bin image)
    handImage = loadImage("assets/images/hand.png");  // Load the hand image
    
     // Load bird image
    birdImage = loadImage("assets/images/bird.png");  // Load the bird image

    //Trash images and their position
    trashImages.push(loadImage("assets/images/trash1.png"));
    trashPositions.push({ x: 150, y: 200 });
    trashImages.push(loadImage("assets/images/trash2.png"));
   trashPositions.push({ x: 350, y: 300 });
   trashImages.push(loadImage("assets/images/trash3.png"));
   trashPositions.push({ x: 500, y: 450 });
    trashImages.push(loadImage("assets/images/trash4.png"));
   trashPositions.push({ x: 560, y: 280 });
   trashImages.push(loadImage("assets/images/trash5.png"));
   trashPositions.push({ x: 750, y: 430 });
    trashImages.push(loadImage("assets/images/trash6.png"));
    trashPositions.push({ x: 950, y: 340 });
    trashImages.push(loadImage("assets/images/trash7.png"));
    trashPositions.push({ x: 1050, y: 250 });


     // Load planting-related images
    plantingInstructionImage = loadImage("assets/images/plantinginstruction.png");
    startPlantingImage = loadImage("assets/images/startplanting.png");
    plantImage = loadImage("assets/images/plant.png");  // Load the image of a plant
    waterImage = loadImage("assets/images/water.png");  // Load the water image
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
      } else if (state === "cleaningInstruction") {
        cleaningInstruction();
      } else if (state === "plantingInstruction") {
        plantingInstruction();
      } else if (state === "planting") {
        planting();
      } else if (state === "cleaningEnding") {
        cleaningEnding();
      } else if (state === "plantingEnding") {
        plantingEnding();
    }
}

      function title() {
        drawTitleText();
        drawStartPrompt();
        checkKeyPressToMenu();
        displayTitleImage();
      }


      function drawTitleText() {
        image(titleTextImage, width /2 - 200 , height /2 - 250 ); 
      }
      
      function drawStartPrompt() {
        push();
        textSize(30);
        fill(255);
        textAlign(CENTER, CENTER);
        text("Press Spacebar to start", width / 2 + 140 , height / 2 + 130);
        pop();
      }


      function displayTitleImage() {
        image(sadEarthImage, 60 , 230, 350, 350); 
      }

       function checkKeyPressToMenu() {
        if (keyIsPressed && key === ' ') {  // Check for spacebar key press to transition to the "menu" state
            state = "menu";
            }
        }

      function menu() {
        background(161, 199, 129);
        displayMenu();
      }


      function displayMenu() {
        displayMenuImages(); // Display menu options with images above
        displayMenuTitle(); // Display menu options
        displayMenuGuide (); // Display menu guide
        checkMenuSelection();  // Check for user input to select an option
      }

      function displayMenuImages() {
        image(image1, width / 2 - 300, height / 2 - 100, 200, 200);  // Load and display the first image above the left option
        image(image2, width / 2 + 100, height / 2 - 100, 200, 200); // Load and display the second image above the right option
        textAlign(CENTER)
        image(cleanGarbageImage, width / 2 - 470 , height / 2 - 10 , 500, 270 ); // Load and display the right option
        image(plantTreesImage, width / 2 - 70 , height / 2 - 10 , 500, 270 ); // Load and display the right option
      }

      function displayMenuTitle() {
        // Title
        textSize(35);
        fill(50);
        textAlign(CENTER, CENTER);
        text("How are you going to save the environment today?", width / 2, height / 2 - 170);
        }


    function displayMenuGuide () {
          // Guide
          textSize(25);
          fill(255);
          textAlign(CENTER, CENTER);
          text("Press 1 or 2 on your keyboard to confirm your choice ", width / 2, height / 2 + 230);
      }


      function checkMenuSelection() {
        // Check for user input to select an option
        if (keyIsPressed) {
          if (key === '1') {
            // Transition to the "cleaning" state for cleaning garbage
            state = "cleaningInstruction";
          } else if (key === '2') {
            // Transition to the "planting" state for planting trees
            state = "plantingInstruction";
          }
        }
      }


      function cleaningInstruction() {
        background(255);  
        image(cleaningInstructionImage, 0, 0, width, height); // Display the instruction image
        displayCleaningInstructions();
        displayStartCleaningButton();
      }

      
     function displayCleaningInstructions() {
        textSize(28);
        fill(70);
        textAlign(CENTER, CENTER);
        text(` Use your mouse to click and drag each piece of 
        garbage on the beach, then release it into the bin.
         Your goal is to clean up the beach. 
         When you've removed all the trash, 
         you'll be making a positive impact on the environment.`, width / 2 + 120 , height / 2 - 50 );
    }

    function displayStartCleaningButton() {
        // Text for the bottom
        textSize(25);
        fill(70, 110, 80);
        textAlign(CENTER, CENTER);
        text("Click here to start > ",   width / 2 + 120 , height / 2 + 200 );
        image(startCleaningImage, width / 2 + 240 , height / 2 + 120, 150, 150); 

         // Check if the user has clicked on the "Start Cleaning" image
        if (mouseIsPressed && mouseX > width / 2 + 240 && mouseX < width / 2 + 390 && mouseY > height / 2 + 120 && mouseY < height / 2 + 270) {
            state = "cleaning"; // Transition to the "cleaning" state
    }
      }


    function cleaning() {
        background(cleaningBackground);
        noCursor();
        image(binImage, 80, 360, 200, 200); // Display bin

    // Handle dragging behavior
    if (isDraggingTrash) {
        // Display the dragged trash image at the mouse position
        // image(trashImages[draggedTrashIndex], mouseX, mouseY, trashSize, trashSize);
        trashPositions[draggedTrashIndex].x = mouseX;
        trashPositions[draggedTrashIndex].y = mouseY;
    }
     // Display each trash image at its specified position
    for (let i = 0; i < trashImages.length; i++) {
        image(trashImages[i], trashPositions[i].x-trashSize/2, trashPositions[i].y-trashSize/2, trashSize, trashSize);
    }
     // Use the user's mouse position to display the hand image
     image(handImage, mouseX-40, mouseY-40, 70, 70);

     displayBird(); //Display and move the bird image

     if (trashImages.length === 0) {  // Transition to the "ending" state
        state = "cleaningEnding";
    }
}  

function displayBird() {
      // Move the bird from right to left
      bird.x -= bird.speed;
      // Check if the bird has exited the canvas to the left
      if (bird.x < -birdImage.width) {
          // Reposition the bird at a random Y position and start from the right
          bird.x = width;
          bird.y = random(height);
      }
      // Display the bird image at the current position
      image(birdImage, bird.x, bird.y, 200, 200);
}


function cleaningEnding() {
    // Display the ending screen
    background(161, 199, 129);
    textSize(50);
    fill(255);
    textAlign(CENTER, CENTER);
    text(`Congratulations!`, width / 2, height / 2 - 100 );

    textSize(30);
    fill(70);
    text(`You've become a pro at cleaning up, right here in our virtual world.
      Now, take those skills and make the real environment sparkle too!
      You've got this!`, width / 2, height / 2 + 50);

      fill(255);
      text("Press 'R' to restart the game.", width / 2, height / 2 + 170);
   
      if (keyIsPressed && key === 'r') {
          reset();
          cursor();
          state = "title"; // Transition back to the title page
      }
}


  
  function plantingInstruction() {
    background(255); // Set the background to white 
    image(plantingInstructionImage, 0, 0, width, height); // Display the instruction image

    //planting instructions
    textSize(30);
    fill(70);
    textAlign(CENTER, CENTER);
    text(` Just click in the garden to plant your trees,
     and they'll be watered automatically. 
    Your mission is to create a thriving green space,
     making the world a better place one tree at a time. `, width / 2 + 120 , height / 2 - 70 );


    // Text for the bottom
    textSize(25);
    fill(70, 110, 80);
    textAlign(CENTER, CENTER);
    text("Click here to start > ",   width / 2 + 120 , height / 2 + 200 );

    // Display the start image
    image(startPlantingImage, width / 2 + 240 , height / 2 + 120, 150, 150); 

     // Check if the user has clicked on the "Start Cleaning" image
    if (mouseIsPressed && mouseX > width / 2 + 240 && mouseX < width / 2 + 390 && mouseY > height / 2 + 120 && mouseY < height / 2 + 270) {
        state = "planting"; // Transition to the "planting" state
}

  }


function planting() {

    image(plantingBackground, 0, 0, width, height);  // planting background image as the background
    plantinginstructionText(); //Show planting text instruction

    // Draw the plant image at the current mouse position
    image(plantImage, mouseX - plantImage.width / 2 + 190 , mouseY - plantImage.height / 2 + 190 , 100, 100);

    if (enterPressed) {  // Transition to the "plantingEnding" state when Enter is pressed
        state = "plantingEnding";
    }
  // Loop through the array of plant positions and draw the plant image at each position
  for (let plantPosition of plantedPlants) {
    image(plantImage, plantPosition.x - plantImage.width / 2 + 190, plantPosition.y - plantImage.height / 2 + 190, 100, 100);
  }
    displayWater(); //display the water image 
    moveWater(); //move the water
    checkIfWaterExited(); // check if water exited canvas then reposition
  }



  function plantinginstructionText() {  
    // Write the planting instruction at the top 
    textSize(20);
    fill(70, 110, 80);
    textAlign(CENTER, CENTER); 
    text(plantingText, width / 2, 30); 
}

function displayWater() {
  image(waterImage, water.x, water.y, 100, 100);
}

function moveWater () {
  water.x -= water.speed; // Move from right to left
}

function checkIfWaterExited() {
    // Check if the water has exited the canvas to the left
  if (water.x < -100) {
    // Reposition the water at the right side of the canvas
    water.x = width; 
    // Update the Y position based on direction
    if (water.direction === 1) {
        water.y += 90; // Move down
    } else {
        water.y -= 90; // Move up
    }
    // Reverse direction if reaching minY or maxY
    if (water.y >= water.maxY || water.y <= water.minY) {
        water.direction *= -1; // Reverse direction
        }
    }
}


  function plantingEnding () {
 // Display the ending screen
 background(161, 199, 129);
 textSize(50);
 fill(255);
 textAlign(CENTER, CENTER);
 text(`Congratulations!`, width / 2, height / 2 - 100 );

 textSize(30);
 fill(70);
 text(` You've become a tree-planting pro right here in our virtual garden.
  Now, take your skills and make the real world greener.
  Get out there and plant some trees, as our planet could use your green touch!
   `, width / 2, height / 2 + 50);

   fill(255);
   text("Press 'R' to restart the game.", width / 2, height / 2 + 150);

   if (keyIsPressed && key === 'r') {
    enterPressed = false;   
    reset();
    state = "title"; // Transition back to the title page
   }
  }



  function reset() {
    plantedPlants = [];
//Trash images and their position
trashImages.push(loadImage("assets/images/trash1.png"));
trashPositions.push({ x: 150, y: 200 });
trashImages.push(loadImage("assets/images/trash2.png"));
trashPositions.push({ x: 350, y: 300 });
trashImages.push(loadImage("assets/images/trash3.png"));
trashPositions.push({ x: 500, y: 450 });
trashImages.push(loadImage("assets/images/trash4.png"));
trashPositions.push({ x: 560, y: 280 });
trashImages.push(loadImage("assets/images/trash5.png"));
trashPositions.push({ x: 750, y: 430 });
trashImages.push(loadImage("assets/images/trash6.png"));
trashPositions.push({ x: 950, y: 340 });
trashImages.push(loadImage("assets/images/trash7.png"));
trashPositions.push({ x: 1050, y: 250 });
  }


  function mousePressed() {
    if (state === "cleaning" && !isDraggingTrash) {
        // Check if the mouse is over a trash item
        for (let i = 0; i < trashPositions.length; i++) {
            let trash = trashPositions[i];
            if (
                mouseX > trash.x &&
                mouseX < trash.x + trashSize &&
                mouseY > trash.y &&
                mouseY < trash.y + trashSize
            ) {
                isDraggingTrash = true;
                draggedTrashIndex = i;
                break;
            }
        }
    }
}

function mouseReleased() {
    if (state === "cleaning") {
        if (isDraggingTrash) {
            // Check if the dragged trash is over the bin
            if (
                mouseX > 80 &&
                mouseX < 280 &&
                mouseY > 360 &&
                mouseY < 560
            ) {
                // Remove the trash item from the array
                trashImages.splice(draggedTrashIndex, 1);
                trashPositions.splice(draggedTrashIndex, 1);
            }
            isDraggingTrash = false;
            draggedTrashIndex = -1;
        }
    }
   
    else if (state === "planting" ) {
        plantedPlants.push({ x: mouseX, y: mouseY });
    }
}

function keyPressed() {
    if (keyCode === ENTER && state === "planting") {
      // Set the flag to indicate Enter has been pressed
      enterPressed = true;
    }
  }

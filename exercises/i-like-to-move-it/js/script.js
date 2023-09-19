/**
 * I like to move it
 * Dorsa Zare
 * 
 * In this project I am creating a program full of shapes that move, change size and color and is interactive.
 */

"use strict";

/**
 * None
*/


// The sun
let circle = {
    x: -50, // Start the sun off-screen to the left
    y: 300,//  Start the sun above the middle
    size: 50,
    fill: {
        r: 255,
        g: 231,
        b: 74
    },
};


// Cloud
let cloud = {
    x: 0, 
    y: 200,
    width: 150,
    height: 70,
    fill: 200,
    speed: 2,
}


// First building
let building = {
   x: 80,
   y: 350,
   w: 150,
   h: 250,
   fill: 130
}

// First building's roof
let roof = {
    x1: 80, 
    y1: 350, 
    x2: 160, 
    y2: 270, 
    x3: 230, 
    y3: 350, 
    fill : 120
}
 
// Second building 
let building2 = {
    x: 400, 
    y: 380,
    w: 160,
    h: 220,
    fill: 135
}

// Second building's roof
let roof2 = {
    x1: 400,
    y1: 380,
    x2: 480,
    y2: 300,
    x3: 560,
    y3: 380,
    fill: 110
}


// Third building 
let building3 = {
    x: 230, 
    y: 450,
    w: 200,
    h: 150,
    fill: 140
}

// Third building's roof
let roof3 = {
    x1: 230,
    y1: 450,
    x2: 330,
    y2: 350,
    x3: 430,
    y3: 450,
    fill:125
}




function preload() {

}


/**
 * Creating Canvas
*/
function setup() {
createCanvas(800,600)
noStroke(); // Remove stroke
}


/**
 * Drawing three buildings, the sun and a moving cloud
*/
function draw() {
    

     // Drawing the Sun

    // Maping the sun's x and y position to mouse movement
    circle.x = map(mouseX, 0, width, -50, width + 50);
    circle.y = map(mouseY, 0, height, 50, height - 50);
    // Maping background color darkness to sun's y position
    let darkness = map(circle.y, 50, height - 50, 0, 50);
    background(160 - darkness/10, 188 - darkness, 222 - darkness);
   // Calculating the sun's size based on its position
   let sunSize = map(circle.y,50,height - 50, 200, 50);
    // Setting the fill color for the sun
    fill(circle.fill.r, circle.fill.g, circle.fill.b);
    // Drawing the sun
    ellipse(circle.x, circle.y, sunSize);
    


    // Drawing building 1

     // Setting the fill color for the rectangle of the building
     fill(building.fill);
    // Drawing rectangle for the building
    rect(building.x,building.y,building.w,building.h);
    // Setting fill color for the roof of the building
    fill(roof.fill);
    // Drawing the roof
   triangle (roof.x1,roof.y1,roof.x2,roof.y2,roof.x3,roof.y3);




   // Drawing building 2

    // Setting the fill color for the rectangle of the building
     fill(building2.fill);
     //Drawing rectangle for the building
     rect(building2.x,building2.y,building2.w,building2.h);
     // Setting fill color for the roof of the building
     fill(roof2.fill);
     // Drawing the roof
    triangle (roof2.x1,roof2.y1,roof2.x2,roof2.y2,roof2.x3,roof2.y3);
 

 
   // Drawing building 3

        // Setting the fill color for the rectangle of the building
        fill(building3.fill);
        // Drawing rectangle for the building
        rect(building3.x,building3.y,building3.w,building3.h);
        // Setting fill color for the roof of the building
        fill(roof3.fill);
        // Drawing the roof
       triangle (roof3.x1,roof3.y1,roof3.x2,roof3.y2,roof3.x3,roof3.y3);
    


        // Drawing the cloud and moving it
        
         // Moving the cloud to the right
         cloud.x += cloud.speed;
         // Setting the fill color for the cloud
        fill(cloud.fill); 
        // Drawing the cloud
        ellipse(cloud.x, cloud.y, cloud.width, cloud.height);

        // Looping the cloud
        cloud.x = constrain(cloud.x, -100, 900);
        if (cloud.x==900){
            cloud.x=-100;
        }
        

}
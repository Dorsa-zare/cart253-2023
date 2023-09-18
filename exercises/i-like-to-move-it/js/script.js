/**
 * I like to move it
 * Dorsa Zare
 * 
 * In this project I am creating a program full of shapes that move, change size and color and is interactive.
 */

"use strict";

/**
 * Description of preload
*/


let bg = {
    r: 140,
    g: 188,
    b: 222,
};

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

// First building
let building = {
   x: 80,
   y: 350,
   w: 150,
   h: 250,
   fill: {
    r: 130,
    g: 130,
    b: 130
},
}

let roof = {
    x1: 80, 
    y1: 350, 
    x2: 160, 
    y2: 270, 
    x3: 230, 
    y3: 350, 
    
    fill : {
      r: 120,
      g: 120,
      b: 120,
}
}
 
// Second building (duplicate)
let building2 = {
    x: 400, 
    y: 380,
    w: 160,
    h: 220,
    fill: {
        r: 135,
        g: 135,
        b: 135
    },
}

let roof2 = {
    x1: 400,
    y1: 380,
    x2: 480,
    y2: 300,
    x3: 560,
    y3: 380,
    fill: {
        r: 110,
        g: 110,
        b: 110
    }
}


// Third building (duplicate)
let building3 = {
    x: 230, 
    y: 450,
    w: 200,
    h: 150,
    fill: {
        r: 140,
        g: 140,
        b: 140
    },
}

let roof3 = {
    x1: 230,
    y1: 450,
    x2: 330,
    y2: 350,
    x3: 430,
    y3: 450,
    fill: {
        r: 125,
        g: 125,
        b: 125
    }
}




function preload() {

}


/**
 * Description of setup
*/
function setup() {
createCanvas(800,600)
noStroke();
}


/**
 * Description of draw()
*/
function draw() {
    
      // Maping the sun's x and y position to mouse movement
    circle.x = map(mouseX, 0, width, -50, width + 50);
    circle.y = map(mouseY, 0, height, 50, height - 50);

    // Map background color darkness to sun's y position
    let darkness = map(circle.y, 50, height - 50, 0, 50);
    background(140 - darkness, 188 - darkness, 222 - darkness);

   // Calculate the sun's size based on its position
   let sunSize = map(circle.y,50,height - 50, 200, 50);

    // Set the fill color for the sun
    fill(circle.fill.r, circle.fill.g, circle.fill.b);

    // Drawing the sun
    ellipse(circle.x, circle.y, sunSize);
    


    //Drawing building 1

     // Set the fill color for the rectangle of the building
     fill(building.fill.r, building.fill.g, building.fill.b);

    //Drawing rectangle for the building
    rect(building.x,building.y,building.w,building.h);

    //set fill color for the roof of the building
    fill(roof.fill.r,roof.fill.g,roof.fill.b);
    //Drawing the roof
   triangle (roof.x1,roof.y1,roof.x2,roof.y2,roof.x3,roof.y3);




   //Drawing building 2
        // Set the fill color for the rectangle of the building
     fill(building2.fill.r, building2.fill.g, building2.fill.b);

     //Drawing rectangle for the building
     rect(building2.x,building2.y,building2.w,building2.h);
 
     //set fill color for the roof of the building
     fill(roof2.fill.r,roof2.fill.g,roof2.fill.b);
     //Drawing the roof
    triangle (roof2.x1,roof2.y1,roof2.x2,roof2.y2,roof2.x3,roof2.y3);
 
 
   //Drawing building 3
        // Set the fill color for the rectangle of the building
        fill(building3.fill.r, building3.fill.g, building3.fill.b);

        //Drawing rectangle for the building
        rect(building3.x,building3.y,building3.w,building3.h);
    
        //set fill color for the roof of the building
        fill(roof3.fill.r,roof3.fill.g,roof3.fill.b);
        //Drawing the roof
       triangle (roof3.x1,roof3.y1,roof3.x2,roof3.y2,roof3.x3,roof3.y3);
    
    

}
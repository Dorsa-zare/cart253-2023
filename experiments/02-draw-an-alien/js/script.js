/**
 * Activity 2: Draw an alien
 * Dorsa Zare
 * 
 * Draws an alien on the canvas.

"use strict";

/**
 * Does Nothing
*/
function preload() {

}


/**
 * Draws an alien
*/
function setup() {

//Background canvas and color which is Pink
createCanvas(640,488);
background(237, 166, 187);

noStroke();

//Drawing the body
fill(127);
ellipse(320,480,300,250);

//Draw the head
fill(100);
ellipse(320,240,250,400);

//Draw the eyes
fill(0);
ellipse(250,240,80,200);
ellipse(390,240,80,200);

//Draw the nostrils
fill(0);
ellipse(301,330,12,12);
ellipse(339,330,12,12);

//Draw mouth
stroke(200,0,0);
strokeWeight(8);
rectMode(CENTER);
rect(320,380,100,25);


}


/**
 * Does nothing()
*/
function draw() {

}
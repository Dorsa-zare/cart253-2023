/**
 * Drawing Experiments
 * Dorsa Zare
 * 
 * Experimenting with P5's drawing and color functions.
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {

    createCanvas(500,500);

    //set the background to blue
    background(168, 212, 237);

    stroke(120,120,20);

   
    //Draw lines for eyes 
    fill(250,150,0);
    line(220,247,240,255);
    line(260,255,280,255);
 
    //Draw ear lines
    fill(250,160,0);
    line(200,180,230,230);
    line(300,180,265,230);
   
    ellipseMode(CENTER);

    //Draw body
    fill(250,160,0);
    ellipse(290,420,80,50);
    
    fill(250,180,0);
    ellipse(270,400,100,70);
    
    fill(250,200,0);
    ellipse(255,360,110,90);
 
//Draw Face
    fill(250,210,0);
    ellipse(250,270,120,120);

//Draw ears circles
    fill(250,150,0);
    ellipse(193,175,30,30);
    ellipse(308,175,30,30);

    //Draw eyes
    fill(250,150,0);
    ellipse(230,265,10,10);
    ellipse(269,265,10,10);


    //Draw mouth
    stroke(200,120,0);
    strokeWeight(5);
    fill(250,200,0);
    line(235,295,265,295);






}


/**
 * Description of draw()
*/
function draw() {

}
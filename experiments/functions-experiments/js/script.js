/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
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
 createCanvas (500,500); 
}


/**
 * Description of draw()
*/
function draw() {
background (0);

let x = random (0,width);
let y = random (0,height);

ellipse (x,y,100); 
}


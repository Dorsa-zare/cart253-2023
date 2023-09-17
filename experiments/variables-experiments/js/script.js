/**
 * Variables experiments
 * Dorsa Zare 
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
 createCanvas(windowWidth, windowHeight);
}


/**
 * Description of draw()
*/
function draw() {
 background(mouseX,170,mouseY);
 rectMode(CENTER);
 rect(width / 2, height / 2 , 100, 100);
}
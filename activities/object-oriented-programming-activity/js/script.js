/**
 * Title of Project
 * Author Name
 * 
 * This is a template.
 *
 */

"use strict";


let paddle;

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight);

    paddle = new Paddle(300,20);
}


/**
 * Description of draw()
*/
function draw() {
background(0);

paddle.move();
paddle.display();
}
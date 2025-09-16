/**
 * Introduction Variables
 * Yelena Arakelian
 *
 * into to variables
 *
 */

"use strict";

/**
 * create canvas
 */
function setup() {
  createCanvas(640, 480);
}

/**
 * draw a circle in the center of the canvas
 */
function draw() {
  background(0);

  //draw the circle
  push();
  fill(255, 255, 0);
  noStroke();
  ellipse(mouseY, mouseX, 100, 100);
  pop();
}

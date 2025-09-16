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
  createCanvas(640, 640);
}

/**
 * draw a circle in the center of the canvas
 */
function draw() {
  push();
  noStroke();
  fill(255, 255, 0);
  ellipse(320, 320, 100, 100);
  pop();
}

class Bat {

    // constructor() sets up our starting properties
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 40;
      this.minSize = 10; // If we get smaller than this minimum we're dead
      this.maxSize = 40;
      this.vx = 0;
      this.vy = 0;
      this.speed = 5;
      this.shrinkRate = 0.03; // How much smaller we get each frame
      this.growRate = 0.05;
      this.jitteriness = 0.1; // How likely the bat is to change direction
      this.alive = true; // The bat starts out alive!
    }
  
    // shrink() causes the bat to get smaller over time
    shrink() {
      // Shrink by reducing the size by a set amount
      this.size = this.size - this.shrinkRate;
      // Check if we're smaller than the minimum size
      if (this.size < this.minSize) {
        // If so, we're dead
        this.alive = false;
      }
    }
  
    tryToEatFlower(flower) {
        let d = dist(this.x,this.y,flower.x,flower.y);
        if (d < this.size/2 + flower.size/2 + flower.petalThickness) {
            this.grow();
            flower.shrink();
            flower.resetMiddleColor();
        }
    }


    grow() {
        this.size = this.size + this.growRate;
        this.size = constrain(this.size, this.minSize, this.maxSize);
    }    

    // move() moves the bat by potentially changing direction
    // and then changing position based on velocity
    move() {
      // First check if we should change direction
      let r = random(0, 1);
      if (r < this.jitteriness) {
        this.vx = random(-this.speed, this.speed);
        this.vy = random(-this.speed, this.speed);
      }
  
      // Update position with velocity to actually move
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
  
      // Constrain to the canvas (guess it's a walled garden!)
      this.x = constrain(this.x, 0, width);
      this.y = constrain(this.y, 0, height);
    }
  
    // display() draws our bat onto the canvas
    display() {
      push();
      // Wings on either side
      fill(0);
      noStroke();
      ellipse(this.x - this.size / 2, this.y, this.size / 2);
      ellipse(this.x + this.size / 2, this.y, this.size / 2);
      pop();
  
      // Body
      push();
      fill(100);
      noStroke();
      ellipse(this.x, this.y, this.size);
      pop();
  
      // Eyes
      push();
      fill(0, 0, 0);
      noStroke();
      ellipse(this.x - this.size / 10, this.y, this.size / 10);
      ellipse(this.x + this.size / 10, this.y, this.size / 10);
      pop();
    }
  }
  
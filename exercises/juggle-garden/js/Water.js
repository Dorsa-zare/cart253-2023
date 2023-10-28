class Water {
    constructor() {
      this.size = 200;
      this.image = loadImage("assets/images/water.png");
      this.x = width; // Start the water image off the canvas
      this.y = random(height); // Random Y position
      this.speed = random(5, 7); // Random horizontal speed
    }
  
    move() {
      this.x -= this.speed;
      
      // Reset the water image when it goes off the screen
      if (this.x < -this.size) {
        this.x = width;
        this.y = random(height);
        this.speed = random(1, 3);
      }
    }
  
    
    display() {
      image(this.image, this.x, this.y, this.size, this.size);
    }
  }
  
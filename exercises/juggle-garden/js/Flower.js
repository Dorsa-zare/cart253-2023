class Flower {
  constructor(x, y, size, stemLength, petalColor) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.maxSize = size;
    this.stemLength = stemLength;
    this.stemThickness = 10;
    this.maxPetalThickness = 10;
    this.petalThickness = 10;
    this.stemColor = {
      r: 50,
      g: 150,
      b: 50
    };
    this.petalColor = petalColor;
    this.centreColor = {
      r: 250,
      g: 220,
      b: 0
    };
    this.alive = true;
  }

  resetSize() {
    this.size = this.maxSize;
  }

  shrink() {
    let shrinkage = random(0, 0.1);
    this.size -= shrinkage;
    this.petalThickness -= shrinkage / 10;
    
    if (this.size <= 0 || this.petalThickness <= 0) {
      this.alive = false;
    }
  }


  hydrated() {
    let growth = random(10, 15);
    this.size += growth;
    this.petalThickness += growth / 5;
  
    this.size = constrain(this.size, 0, this.maxSize); // Fixed the case of maxsize
    this.petalThickness = constrain(this.petalThickness, 0, this.maxPetalThickness);
  }
  
  changeMiddleColor() {
    // Change the middle color of the flower
    this.centreColor = {
      r: random(50, 150),
      g: random(220, 255),
      b: random(50, 100),
    };
  }

  resetMiddleColor() {
    this.centreColor = {
    r: 250,
    g: 220,
    b: 0
  };
  }
  
  grow() {
    let growth = random(10, 15);
    this.size += growth;
    this.petalThickness += growth / 5;

    this.size = constrain(this.size, 0, this.maxSize);
    this.petalThickness = constrain(this.petalThickness, 0, this.maxPetalThickness);
  }


  display() {
    push();
    strokeWeight(this.stemThickness);
    stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
    line(this.x, this.y, this.x, this.y + this.stemLength);
    
    strokeWeight(this.petalThickness);
    fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
    stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  mousePressed() {
    let d = dist(this.x, this.y, mouseX, mouseY);

    if (d < this.size / 2 + this.petalThickness) {
      this.size = this.maxSize;
      this.petalThickness = this.maxPetalThickness;
    }
  }
}
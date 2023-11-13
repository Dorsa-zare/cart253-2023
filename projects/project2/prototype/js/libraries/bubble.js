class Bubble {
    constructor() {
        this.x = random(width); // Initial x position
        this.y = height; // Start from the bottom of the screen
        this.size = 100; // Bubble radius
        this.speed = random(1, 3); // Vertical speed
    }

    move() {
        this.y -= this.speed; // Move the bubble upwards
    }

    display() {
        // Draw the bubble
        fill(100, 100, 255); // Bubble color 
        ellipse(this.x, this.y, this.size * 2, this.size * 2);
    }
}

let bubbles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    initializeBubbles();
}

function initializeBubbles() {
    for (let i = 0; i < 10; i++) {
        bubbles.push(new Bubble());
    }
}

function draw() {
    background(255); // background color 

    for (let bubble of bubbles) {
        bubble.move();
        bubble.display();
    }
}

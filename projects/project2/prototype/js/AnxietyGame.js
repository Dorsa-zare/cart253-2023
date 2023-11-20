// AnxietyGame.js

class AnxietyGame {
    constructor(tilesImage, bubbleImages, bubblePopSound) {
        this.tilesImage = tilesImage;
        this.bubbleImages = bubbleImages;
        this.bubblePopSound = bubblePopSound;
        this.bubbles = [];

        this.createBubbles();
    }

    createBubbles() {
        // Create individual bubble objects
        for (let i = 0; i < 30; i++) {
            let bubble = new Bubble(random(width), height + random(20, height))
            this.bubbles.push(bubble);
        }
    }

    display() {
        background(this.tilesImage);
        // Display the moving bubble images
        for (let bubble of this.bubbles) {
            bubble.move();
        }
        Bubble.handleBubbleClick(this.bubbles);
    }
}

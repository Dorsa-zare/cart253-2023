// AnxietyGame.js

class AnxietyGame {
    constructor(tilesImage, bubbleImages, bubblePopSound, gameDuration) {
        this.tilesImage = tilesImage;
        this.bubbleImages = bubbleImages;
        this.bubblePopSound = bubblePopSound;
        this.bubbles = [];

        this.gameOverTimer = 0;
        this.gameLength = 60 * 30; // 30 seconds

        this.createBubbles();
    }

    createBubbles() {
        // Create individual bubble objects
        for (let i = 0; i < 30; i++) {
            let bubble = new Bubble(random(width), height + random(20, height));
            this.bubbles.push(bubble);
        }
    }

    display() {
        background(this.tilesImage);

        // Display the moving bubble images
        for (let bubble of this.bubbles) {
            bubble.move();
            bubble.display();

            // Check if the bubble is clicked
            if (bubble.isClicked()) {
                // Play the bubble popping sound effect
                this.bubblePopSound.play();
                // Reset the position of the clicked bubble
                bubble.x = random(width);
                bubble.y = height + random(20, height);
            }
        }

        // Increase the timer's count by one frame
        this.gameOverTimer++;

        // Check if we have reached the end of our timer
        if (this.gameOverTimer >= this.gameLength) {
            // The game is over! So you should handle the logic for game over
            this.gameOver();
        }
    }
}
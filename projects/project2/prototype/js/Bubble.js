class Bubble {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }



    move() {
        // Display and move individual bubble objects
        // Move each bubble upwards 
        this.y -= 1;

        // Display the single bubble image at its new position
        image(bubbleImages[0], this.x, this.y, 100, 100);

        // Check if the bubble has moved out of the canvas, then reset its position
        if (this.y < -100) {
            this.y = height;
        }
    }

    static handleBubbleClick(bubbles) {
        // Check if the user clicked on a bubble
        for (let i = 0; i < bubbles.length; i++) {
            let bubbleX = bubbles[i].x;
            let bubbleY = bubbles[i].y;

            if (
                mouseX > bubbleX &&
                mouseX < bubbleX + 100 &&
                mouseY > bubbleY &&
                mouseY < bubbleY + 100
            ) {
                // Play the bubble popping sound effect
                bubblePopSound.play();
                // Remove the clicked bubble from the array
                bubbles.splice(i, 1);
            }
        }
    }
}
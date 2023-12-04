class AnxietyGame {
    constructor(tilesImage, bubbleImages, bubblePopSound, gameDuration) {
        this.tilesImage = tilesImage;
        this.bubbleImages = bubbleImages;
        this.bubblePopSound = bubblePopSound;
        this.bubbles = [];
        this.buttonImage = loadImage("assets/images/button.png"); // button image

        this.createBubbles();
        // this.startTime = millis()

    }

    startTimer() {
        console.log(gameDuration.playDuration);
        setTimeout(() => {
            state = `emotions`;
        }, gameDuration.playDuration * 1000);
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

        image(this.buttonImage, width / 2 + 410, height / 2 - 330, 180, 180); // The image of the exit button

        // Display the title and the options text
        textSize(30);
        textAlign(CENTER, CENTER);
        fill(0);
        text("Exit", width / 2 + 500, height / 2 - 235);

        // Only check for mouse press when the mouse button is pressed
        if (mouseIsPressed) {
            this.mousePressed();
        }

        // Display the moving bubble images
        // if (gameDuration.getDuration() !== 30) {
        // Only create new bubbles if the game duration is not 30 seconds
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

    }
    // Function to handle mouse press in the AnxietyGame state
    mousePressed() {
        // Check if the mouse is over the exit button
        if (
            mouseX > width / 2 + 410 &&
            mouseX < width / 2 + 590 &&
            mouseY > height / 2 - 330 &&
            mouseY < height / 2 - 150
        ) {
            // Handle the exit button click (transition back to emotions state)
            this.handleMousePress();
        }
    }

    handleMousePress() {
        state = "emotions";
    }
}


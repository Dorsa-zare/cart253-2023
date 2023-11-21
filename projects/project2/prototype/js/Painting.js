class Painting {
    constructor(petCustomization) {
        this.state = "prompt";
        this.petCustomization = petCustomization;
        this.backgroundImagePrompt = loadImage("assets/images/room.png"); //Background image for the prompt state
        this.backgroundImagePainting = loadImage("assets/images/paintingbg.png"); // background image for painting
        this.buttonImage = loadImage("assets/images/button.png");
        this.nextButtonText = "Next";
    }

    display() {
        if (this.state === "prompt") {
            this.displayPrompt();
        } else if (this.state === "painting") {
            this.displayPainting();
        }
    }

    displayPrompt() {
        // Display the initial prompt for the painting mini-game
        background(this.backgroundImagePrompt);
        image(this.petCustomization.chosenPet, width / 2 - 400, height / 2, 300, 300);
        image(this.buttonImage, width / 2 + 80, height / 2 + 80, 330, 220);
        textSize(25);
        textAlign(CENTER, CENTER);
        fill(0);

        if (this.nextButtonText === "Next") {
            text('Painting is proven to release tension', width / 2, height / 2 - 90);
            text('and reduce feelings of anger.', width / 2, height / 2 - 60);
        } else {
            text("So why don't we try painting this wall to a new color?", width / 2, height / 2 - 75);
        }

        text(this.nextButtonText, width / 2 + 250, height / 2 + 190);
    }

    displayPainting() {
        // Display the new screen for the painting mini-game
        background(this.backgroundImagePainting);
        
    }

    mousePressed() {
        // Check if the mouse is pressed on the "Next" button
        if (
            mouseX > width / 2 + 250 &&
            mouseX < width / 2 + 350 &&
            mouseY > height / 2 + 170 &&
            mouseY < height / 2 + 210
        ) {
            // Toggle the state and update the button text accordingly
            if (this.nextButtonText === "Next") {
                this.nextButtonText = "Click here to start";
            } else {
                // Handle the logic for changing the state to "painting"
                this.state = "painting";
                // Optionally, you can reset other game variables or perform other actions here
            }
        }
    }
}

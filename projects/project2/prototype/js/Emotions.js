class Emotions {
    constructor(petCustomization) {
        this.petCustomization = petCustomization;
        this.backgroundImage = loadImage("assets/images/nature.png");
    }


    display() {
        background(this.backgroundImage);

        image(this.petCustomization.chosenPet, width / 2 - 400, height / 2 - 150, 400, 400);
        textSize(28);
        textAlign(CENTER, CENTER);
        fill(0);
        text(`Which one of these best reflects how you're feeling right now? `, width / 2 + 50, height / 2 - 220);

        // Display button images and text using arrays
        for (let i = 0; i < 4; i++) {
            image(buttonImages[i], width / 2 + 100, height / 2 - 220 + i * 80, 270, 250);
            text(buttonText[i], width / 2 + 240, height / 2 - 90 + i * 80);
        }
    }

    handleMousePress() {
        if (this.isAnxiousOptionClicked()) {
            // Set the state to "promptDuration"
            state = "promptDuration";
        } else if (this.isDiscouragedOptionClicked()) {
            // Set the state to "positiveAffirmation"
            state = "positiveAffirmation";
        } else if (this.isAngryOptionClicked()) {
            // Set the state to "painting"
            state = "painting";
        }
    }


    isAnxiousOptionClicked() {
        return (
            mouseX > width / 2 + 100 &&
            mouseX < width / 2 + 250 &&
            mouseY > height / 2 - 190 &&
            mouseY < height / 2 - 90
        );
    }

    isDiscouragedOptionClicked() {
        return (
            mouseX > width / 2 + 100 &&
            mouseX < width / 2 + 250 &&
            mouseY > height / 2 - 60 &&
            mouseY < height / 2
        );
    }
    isAngryOptionClicked() {
        return (
            mouseX > width / 2 + 100 &&
            mouseX < width / 2 + 250 &&
            mouseY > height / 2 + 70 &&
            mouseY < height / 2 + 90
        );
    }
}


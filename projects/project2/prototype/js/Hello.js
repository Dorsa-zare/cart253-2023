class Hello {
    constructor(petCustomization) {
        this.petCustomization = petCustomization;
    }

    display() {
        // Display the chosen pet image
        background(180, 200, 150);

        image(this.petCustomization.chosenPet, width / 2 - 150, height / 2 - 150, 360, 360);

        // Display the text above the pet's head
        textSize(24);
        textAlign(CENTER, CENTER);
        fill(0);
        text("Hello, I will be your emotional support pet", width / 2, height / 2 - 200);
        text("I will do my best to accompany you and help you in your journey.", width / 2, height / 2 - 160);
        textSize(20);
        text("Press mouse to start", width / 2 + 20, height / 2 + 200);
    }

    handleMousePress() {
        state = "emotions";
    }
}

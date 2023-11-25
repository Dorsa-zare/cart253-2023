class Hello {
    constructor(petCustomization) {
        this.petCustomization = petCustomization;
        this.backgroundImage = loadImage("assets/images/naturecloseup.png");
        this.petX = -300; // Initial x-coordinate off-screen to the left
        this.petY = height / 2 - 100; // Initial y-coordinate
        this.petSpeed = 5; // The speed of the pet's entrance
    }

    display() {
        // Display the background image
        background(this.backgroundImage);

        // Update the pet's x-coordinate to make it enter from the left
        this.petX += this.petSpeed;

        // Constrain the pet's position to the specified area
        this.petX = constrain(this.petX, -300, width / 2 - 250 );

        // Display the chosen pet image
        image(this.petCustomization.chosenPet, this.petX, this.petY, 370, 370);

        // Display the text above the pet's head
        textSize(24);
        textAlign(CENTER, CENTER);
        fill(0);
        text("Hello, I will be your emotional support pet", width / 2, height / 2 - 200);
        text("I will do my best to accompany you and help you in your journey.", width / 2, height / 2 - 160);
        textSize(20);
        text("Press mouse to start", width / 2 + 300, height / 2);
    }

    handleMousePress() {
        state = "emotions";
    }
}

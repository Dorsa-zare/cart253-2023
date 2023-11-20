class Painting {
    constructor() {
        this.state = "prompt";
        this.petCustomization = petCustomization;
        this.backgroundImage = loadImage("assets/images/room.png");
    }

    prompt() {
        // Display the initial prompt for the painting mini game
        background(this.backgroundImage);

        image(this.petCustomization.chosenPet, width / 2 - 400, height / 2  , 300, 300);

        textSize(25);
        textAlign(CENTER, CENTER);
        fill(0);
        text(" How about we paint this wall together? ", width / 2 - 150, height / 2 - 110);


    }
}
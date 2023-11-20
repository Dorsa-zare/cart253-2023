class PetCustomization {
    constructor() {
        this.petImages = [];
        this.chosenPet = null;
    }

    preload() {
        // Load pet images into the array
        for (let i = 1; i <= 4; i++) {
            this.petImages[i] = loadImage(`assets/images/pet${i}.png`);
        }
    }

    setup() {
    }

    draw() {
        background(180, 200, 150);
        textSize(28);
        textAlign(CENTER, CENTER);
        fill(0);
        text(` Choose your emotional support pet's look
            to make it your own! `, width / 2, height / 2 - 200);

        this.displayPetImages();
        this.displayPetLabels();
    }

    displayPetImages() {
        image(this.petImages[1], 140, height / 2 - 130, 300, 300);
        image(this.petImages[2], 400, height / 2 - 140, 320, 320);
        image(this.petImages[3], 620, height / 2 - 130, 300, 300);
        image(this.petImages[4], 850, height / 2 - 130, 300, 300);
    }

    displayPetLabels() {
        // Add a label for each pet image
        textSize(18);
        textAlign(CENTER, CENTER);
        fill(0);
        text("Pet 1", 340, height / 2 + 170);
        text("Pet 2", 550, height / 2 + 170);
        text("Pet 3", 770, height / 2 + 170);
        text("Pet 4", 1000, height / 2 + 170);
    }

    checkChosenPet() {
        if (mouseX > 140 && mouseX < 440 && mouseY > height / 2 - 130 && mouseY < height / 2 + 170) {
            this.chosenPet = this.petImages[1];
            state = "hello";
        } else if (mouseX > 400 && mouseX < 720 && mouseY > height / 2 - 140 && mouseY < height / 2 + 180) {
            this.chosenPet = this.petImages[2];
            state = "hello";
        } else if (mouseX > 620 && mouseX < 920 && mouseY > height / 2 - 130 && mouseY < height / 2 + 170) {
            this.chosenPet = this.petImages[3];
            state = "hello";
        } else if (mouseX > 850 && mouseX < 1150 && mouseY > height / 2 - 130 && mouseY < height / 2 + 170) {
            this.chosenPet = this.petImages[4];
            state = "hello";
        }
    }
}

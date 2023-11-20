class Title {
    constructor(titleBackgroundImage) {
        this.titleBackgroundImage = titleBackgroundImage;
    }

    display() {
        // The title page
        background(this.titleBackgroundImage);
        this.displayTitleText();
    }

    displayTitleText() {
        // Display the title and "Press here to start" message
        textSize(30);
        text("Press mouse to start", width / 2 - 150, height / 2 + 50);
    }
}

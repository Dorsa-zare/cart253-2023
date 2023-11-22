class GameDuration {
    constructor() {
        this.playDuration = null;
        this.state = "prompt";
        this.backgroundImage = loadImage("assets/images/gamedurationbg.png"); // Background image
    }

    prompt() {
        background(this.backgroundImage); // Use the loaded background image
        textSize(30);
        textAlign(CENTER, CENTER);
        fill(0);
        text("How long do you want to play the anxiety game?", width / 2, height / 2 - 130);
        textSize(25);
        text("30 seconds", width / 2 - 310, height / 2 + 90);
        text("60 seconds", width / 2 + 10, height / 2 + 90);
        text("90 seconds", width / 2 + 330, height / 2 + 90);
    }

  handleSelection() {
    if (mouseY > height / 2 + 30 && mouseY < height / 2 + 60) {
        this.playDuration = 30;
    } else if (mouseY > height / 2 + 60 && mouseY < height / 2 + 90) {
        this.playDuration = 60;
    } else if (mouseY > height / 2 + 90) {
        this.playDuration = 90;
    }

    this.state = "anxietyGame"; // Set the state to "anxietyGame" after handling the selection
}


    getDuration() {
        return this.playDuration;
    }

    getState() {
        return this.state;
    }
}

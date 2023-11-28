class GameDuration {
    constructor() {
        this.playDuration = null;
        this.state = "prompt";
        this.backgroundImage = loadImage("assets/images/tiles.png"); // Background image
        this.bubbleImage = loadImage("assets/images/bubble.png"); // bubble image
        this.buttonImage = loadImage("assets/images/button.png"); // button image
        
    }

    prompt() {
        background(this.backgroundImage); // Use the loaded background image
        image(this.bubbleImage, width / 2 - 250, height / 2 , 200, 200);
        image(this.bubbleImage, width / 2 + 50, height / 2 , 200, 200);
        image(this.buttonImage, width / 2 - 500 , height / 2 - 320 , 1000, 370);

        //Display the title and the options text
        textSize(30);
        textAlign(CENTER, CENTER);
        fill(0);
        text("How long do you want to play the anxiety game?", width / 2, height / 2 - 130);
        textSize(25);
        text("30 seconds", width / 2 - 150, height / 2 + 90);
        text("Unlimited", width / 2 + 150, height / 2 + 90);
      
    }

  handleSelection() {
    if (mouseY > height / 2 + 30 && mouseY < height / 2 + 60) {
        this.playDuration = 30;
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

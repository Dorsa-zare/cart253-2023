class PositiveAffirmation {
    constructor() {
        this.state = "prompt";
    }

    prompt() {
        // Display the initial prompt for the Positive Affirmation Journals mini game
        background(255); 
        textSize(30);
        textAlign(CENTER, CENTER);
        fill(0);
        text("Welcome to the Positive Affirmation Journals!", width / 2, height / 2 - 100);
    }
}
class PositiveAffirmation {
    constructor() {
        this.state = "prompt";
        this.backgroundImage = loadImage("assets/images/journal.png");
        this.words = ["Loved", "Strong", "Confident", "Calm", "happy", "Brave", "I am"];
        this.selectedWords = [];
        this.wordBackgroundColors = ["#FFB6C1", "#87CEEB", "#98FB98", "#FFD700", "#FFA07A", "#DDA0DD", "#87CEFA", "#FF6347", "#7CFC00"];
        this.draggedWordIndex = -1; // Index of the dragged word
        this.isDraggingWord = false; // Flag to indicate if a word is being dragged
    }

    prompt() {
        // Display the initial prompt for the Positive Affirmation Journals mini game
        background(this.backgroundImage);
        textSize(30);
        textAlign(CENTER, CENTER);
        fill(0);
        text("Welcome to the Positive Affirmation Journals!", width / 2 - 200, height / 2 - 210);
        textSize(15);
        text('Create your own positive affirmation.', width / 2 - 350, height / 2 - 50);
        
        noStroke();
        fill(240)
        rect(600, 200, 150, 55);
        rect(600, 310, 150, 55);
        this.displayWords();
    }

    displayWords() {
        // Display the set of positive words on the right side
        textSize(25);
        textAlign(CENTER, CENTER);

        for (let i = 0; i < this.words.length; i++) {
            let x = width / 2 + 500;
            let y = height / 2 - 150 + i * 50;

            // Draw background color for each word
            fill(this.wordBackgroundColors[i]);
            rect(x - textWidth(this.words[i]) / 2 - 5, y - 15, textWidth(this.words[i]) + 10, 30);

            // Draw the word
            fill(0);
            text(this.words[i], x, y);

            // Check if the user clicked on a word and set the draggedWordIndex
            if (
                mouseX > x - textWidth(this.words[i]) / 2 - 5 &&
                mouseX < x + textWidth(this.words[i]) / 2 + 5 &&
                mouseY > y - 15 &&
                mouseY < y + 15 &&
                mouseIsPressed
            ) {
                this.isDraggingWord = true;
                this.draggedWordIndex = i;
            }
        }
        if (this.isDraggingWord) {
            // Draw the dragged word at the current mouse position
            fill(this.wordBackgroundColors[this.draggedWordIndex]);
            rect(mouseX - textWidth(this.words[this.draggedWordIndex]) / 2 - 5, mouseY - 15, textWidth(this.words[this.draggedWordIndex]) + 10, 30);
            fill(0);
            text(this.words[this.draggedWordIndex], mouseX, mouseY);
        }
    }

    mousePressed() {
        // Check if the user clicked on a word and set the draggedWordIndex
        for (let i = 0; i < this.words.length; i++) {
            let x = width / 2 + 500;
            let y = height / 2 - 150 + i * 40;

            if (
                mouseX > x - textWidth(this.words[i]) / 2 - 5 &&
                mouseX < x + textWidth(this.words[i]) / 2 + 5 &&
                mouseY > y - 15 &&
                mouseY < y + 15
            ) {
                this.isDraggingWord = true;
                this.draggedWordIndex = i;
            }
        }
    }

    mouseReleased() {
        // Check if a word is being dragged and released
        if (this.isDraggingWord) {
            // Add the word to the selectedWords array and reset dragging flags
            this.selectedWords.push(this.words[this.draggedWordIndex]);
            this.isDraggingWord = false;
            this.draggedWordIndex = -1;
        }
    }
}


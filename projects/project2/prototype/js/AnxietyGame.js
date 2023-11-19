class AnxietyGame {

    constructor() {
        this.state = `title`;
    };
    draw() {
        if (this.state === "title") {
            this.title();
        } else if (this.state === "anxietyGame") {
            this.anxietyGame();
        }
    }
    title() {

    }
    anxietyGame() {

        background(tilesImage);
    }
}





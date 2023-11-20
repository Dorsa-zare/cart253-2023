class Instruction {
    display() {
        background(180, 200, 150);
        textSize(28);
        textAlign(CENTER, CENTER);
        fill(0);
        text(`Have fun interacting with your virtual companion and
            watch how it responds to your emotions.
            Don't forget to customize your pet's look to make it your own.
            Enjoy exploring the world of emotional well-being in this interactive experience!`, width / 2, height / 2 - 50);
        textSize(20);
        text("Press here to customize your pet", width / 2, height / 2 + 90);
    }
}

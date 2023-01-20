input.onButtonPressed(Button.A, function () {
    music.playMelody("C D E F G A B C5 ", 999)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("GET ANNOYED")
    music.setVolume(255)
    music.playMelody("C5 C5 B B A A G G ", 999)
    music.playMelody("C5 C5 B B A A G G ", 999)
    music.playMelody("C5 C5 B B A A G G ", 999)
    music.playMelody("C5 C5 B B A A G G ", 999)
    music.playMelody("C5 C5 B B A A G G ", 999)
    music.playMelody("C5 C5 B B A A G G ", 999)
    music.playMelody("C5 C5 B B A A G G ", 999)
    music.playMelody("C5 C5 B B A A G G ", 999)
    music.playMelody("C5 C5 B B A A G G ", 999)
    music.playMelody("C5 C5 B B A A G G ", 999)
    music.playMelody("C5 C5 B B A A G G ", 999)
    music.playMelody("C5 C5 B B A A G G ", 999)
    music.playMelody("C C C C C C C C ", 999)
    music.setBuiltInSpeakerEnabled(true)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("   A + B")
})
music.playMelody("C5 B A G F E D C ", 999)
basic.showString("PRESS A")

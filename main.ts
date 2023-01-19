input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    music.playMelody("C D E F G A B C5 ", 226)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("GET ANNOYED")
    music.setVolume(255)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 211, 9999, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("A + B")
})
basic.showString("PRESS A")

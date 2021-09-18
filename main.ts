radio.onReceivedString(function (receivedString) {
    if (receivedString == "NONE") {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        rameno_01 = 50
        rotation = 50
    } else if (receivedString == "U") {
        rameno_01 = 50
    } else if (receivedString == "D") {
        rameno_01 = 50
    } else if (receivedString == "L") {
        rotation = 70
    } else if (receivedString == "R") {
        rotation = 30
    } else if (receivedString == "UL") {
        rameno_01 = 50
        rotation = 70
    } else if (receivedString == "UR") {
        rameno_01 = 50
        rotation = 30
    } else if (receivedString == "DL") {
        rameno_01 = 50
        rotation = 70
    } else if (receivedString == "DR") {
        rameno_01 = 50
        rotation = 30
    } else if (receivedString == "AX") {
        rameno_01 = 50
        rotation = 50
    } else if (receivedString == "BX") {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (receivedString == "DX") {
        rameno_02 += 1
    } else if (receivedString == "FX") {
        rameno_02 += 1
    } else if (receivedString == "PX") {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
let rotation = 0
let rameno_01 = 0
basic.showLeds(`
    # . . . #
    . . # . .
    . # # # .
    . . # . .
    # . . . #
    `)
radio.setGroup(1)
let rameno_02 = 90
rameno_01 = 50
rotation = 50
basic.forever(function () {
    servos.P0.setAngle(rameno_02)
    servos.P1.run(rameno_01)
    servos.P2.run(rotation)
})

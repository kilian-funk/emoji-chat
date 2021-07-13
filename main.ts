radio.onReceivedNumber(function (receivedNumber) {
    code = receivedNumber
    zeige_emoji(code)
})
input.onButtonPressed(Button.A, function () {
    code += 1
    if (code == 4) {
        code = 0
    }
    zeige_emoji(code)
})
function zeige_emoji (code: number) {
    if (code == 0) {
        basic.showIcon(IconNames.Heart)
    } else if (code == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (code == 2) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Square)
    }
}
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(code)
    basic.showIcon(IconNames.Yes)
})
let code = 0
radio.setGroup(1)
code = 0
zeige_emoji(code)

input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    add = number + 9
    basic.showNumber(add)
    minus = number - 9
    basic.showNumber(minus)
    multiply = number * 2
    basic.showNumber(multiply)
    divide = number / 3
    basic.showNumber(divide)
    remainder_of_4 = number % 4
    basic.showNumber(remainder_of_4)
    square_root = Math.sqrt(number)
    basic.showNumber(square_root)
    round_34 = Math.round(0.75)
    basic.showNumber(round_34)
    ceiling_39 = Math.ceil(0.33)
    basic.showNumber(ceiling_39)
    cubed = cubed ** 3
    basic.showNumber(cubed)
    random = randint(0, 100)
    basic.showNumber(random)
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
let random = 0
let cubed = 0
let ceiling_39 = 0
let round_34 = 0
let square_root = 0
let remainder_of_4 = 0
let divide = 0
let multiply = 0
let minus = 0
let add = 0
let number = 0
basic.showIcon(IconNames.Heart)
number = 0

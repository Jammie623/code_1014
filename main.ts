basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        if (y == 1) {
            continue;
        }
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
        }
    }
})

function drawDinasour(canvas, image) {
    var dinasour = new Move(canvas, image)
    return dinasour
}

function Move(canvas, image) {
    this.ctx = canvas.getContext('2d')
    this.image = image
    this.flag1 = false
    this.down = false
    this.up = false
    this.canUp = true
    this.x = 100
    this.y = 300
    this.h = 120
    this.w = 111
}
Move.prototype.autoMove = function () {
    if (this.down) {
        this.y = 420 - 72
        this.w = 152
        this.h = 72
        if (!this.flag1) this.ctx.drawImage(this.image, 683, 48, 152, 72, this.x, this.y, this.w, this.h)
        else this.ctx.drawImage(this.image, 835, 48, 152, 72, this.x, this.y, 152, 72)
        this.flag1 = !this.flag1
    } else if (!this.down && !this.up) {
        this.y = 420 - 120
        this.w = 111
        this.h = 120
        if (this.flag1) this.ctx.drawImage(this.image, 226, 0, 111, 120, this.x, this.y, this.w, this.h)
        else this.ctx.drawImage(this.image, 339, 0, 111, 120, this.x, this.y, this.w, this.h)
        this.flag1 = !this.flag1
    }
}
Move.prototype.Up = function (y) {
    this.up = true
    this.y = 420 - 120 + y
    this.w = 111
    this.h = 120
    this.ctx.drawImage(this.image, 0, 0, 114, 120, this.x, this.y, this.w, this.h)
    if (y === 0) this.up = false
}
Move.prototype.Down = function (keyCode) {
    if (keyCode === 40) {
        this.down = true
        this.up = false
        this.canUp = false
    } else {
        this.down = false
        this.canUp = true
    }
}
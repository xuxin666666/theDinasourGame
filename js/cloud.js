function RandomSpace() {
    var num1 = Math.random() * 10
    var space, up
    if (num1 <= 3) space = 200
    else if (num1 <= 6) space = 300
    else space = 400
    if (num1 <= 5) up = 0
    else up = 60
    return [space, up]
}

function drawCloud(canvas, imgsrc, space, up) {
    var image = new Image()
    image.src = imgsrc
    var cloud = new CloudImage(canvas, image, space, up)
    return cloud
}
function CloudImage(canvas, image, space, up) {
    this.ctx = canvas.getContext('2d')
    this.x = 1000
    this.w = 128
    this.h = 60
    this.image = image
    this.space = space
    this.up = up
}
CloudImage.prototype.draw = function () {
    this.ctx.drawImage(this.image, this.x + this.space, 200 - this.up, this.w, this.h)
}
CloudImage.prototype.move = function () {
    this.x -= 5
}
CloudImage.prototype.isOut = function () {
    if (this.x + this.space + this.w <= 0) return true
    else return false
}
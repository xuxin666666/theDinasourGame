function RandomBarrier() {
    var num = Math.random() * 10
    if (num <= 2) return 11
    else if (num <= 4) return 12
    else if (num <= 5) return 13
    else if (num <= 7) return 21
    else if (num <= 9) return 22
    else return 23
}
function createBarrier(canvas, imgsrc, x, y, w, h) {
    var image = new Image()
    image.src = imgsrc
    var barrier = new Barrier(canvas, image, x, y, w, h)
    return barrier
}
function Barrier(canvas, image, x, y, w, h) {
    this.ctx = canvas.getContext('2d')
    this.image = image
    this.ix = x
    this.iy = y
    this.w = w
    this.h = h
    this.space = this.randomSpace()
    this.x = 1200 + this.space
    this.y = 420 - this.h
}
Barrier.prototype.randomSpace = function () {
    var num = Math.random() * 10
    if (num <= 6) return 20
    else if (num <= 9) return 120
    else return 240
}
Barrier.prototype.draw = function () {
    this.ctx.drawImage(this.image, this.ix, this.iy, this.w, this.h, this.x, this.y, this.w, this.h)
}
Barrier.prototype.move = function (speed) {
    this.x -= speed
}
Barrier.prototype.isOut = function () {
    if (this.x + this.w <= 0) return true
    else return false
}

var bx, by, bw, bh
var dx, dy, dw, dh
var Bbox1minX, Bbox1maxX, Bbox1minY, Bbox1maxY
var Bbox2minX, Bbox2maxX, Bbox2minY, Bbox2maxY
var Dbox1minX, Dbox1maxX, Dbox1minY, Dbox1maxY
var Dbox2minX, Dbox2maxX, Dbox2minY, Dbox2maxY
var Dbox3minX, Dbox3maxX, Dbox3minY, Dbox3maxY
var Dbox4minX, Dbox4maxX, Dbox4minY, Dbox4maxY
var hitFlag = 0
function isHitByDinasour(barrier, dinasour) {
    bx = barrier.x; by = barrier.y; bw = barrier.w; bh = barrier.h
    dx = dinasour.x; dy = dinasour.y; dw = dinasour.w; dh = dinasour.h
    if (Math.max(bx, dx) < Math.min(bx + bw, dx + dw) && Math.max(by, dy) < Math.min(by + bh, dy + dh)) {
        hitFlag = 0
        if (barrier.image.src === 'image/barrier1.png') {
            Bbox1minX = bx + 15; Bbox2maxX = bx + bw - 15; Bbox1minY = by + 4; Bbox1maxY = by + bh
            Bbox2minX = bx + 2; Bbox2maxX = bx + bw; Bbox2minY = by + 24; Bbox2maxY = by + bh - 40
        } else {
            Bbox1minX = bx + 20; Bbox2maxX = bx + bw - 21; Bbox1minY = by + 5; Bbox1maxY = by + bh
            Bbox2minX = bx + 1; Bbox2maxX = bx + bw; Bbox2minY = by + 35; Bbox2maxY = by + bh - 50
        }
        if (dinasour.down) {
            Dbox1minX = dx + 85; Dbox1maxX = dx + dw; Dbox1minY = dy + 3; Dbox1maxY = dy + 45
            Dbox2minX = dx + 21; Dbox2maxX = dx + dw - 57; Dbox2minY = dy + 5; Dbox2maxY = dy + 56
            Dbox3minX = dx; Dbox3maxX = dx + 21; Dbox3minY = dy; Dbox3maxY = dy + 32
            Dbox4minX = dx + 28; Dbox4maxX = dx + 54; Dbox4minY = dy + 56; Dbox4maxY = dy + 67
        } else {
            Dbox1minX = dx + 56; Dbox1maxX = dx + 108; Dbox1minY = dy + 4; Dbox1maxY = dy + 43
            Dbox2minX = dx + 20; Dbox2maxX = dx + 77; Dbox2minY = dy + 43; Dbox2maxY = dy + 90
            Dbox3minX = dx + 4; Dbox3maxX = dx + 20; Dbox3minY = dy + 43; Dbox3maxY = dy + 85
            Dbox4minX = dx + 25; Dbox4maxX = dx + 61; Dbox4minY = dy + 89, Dbox4maxY = dy + 116 
        }
        if((Math.max(Bbox1minX, Dbox1minX) < Math.min(Bbox1maxX, Dbox1maxX) && Math.max(Bbox1minY, Dbox1minY) < Math.min(Bbox1maxY, Dbox1maxY)) 
            || (Math.max(Bbox1minX, Dbox2minX) < Math.min(Bbox1maxX, Dbox2maxX) && Math.max(Bbox1minY, Dbox2minY) < Math.min(Bbox1maxY, Dbox2maxY)) 
            || (Math.max(Bbox1minX, Dbox3minX) < Math.min(Bbox1maxX, Dbox3maxX) && Math.max(Bbox1minY, Dbox3minY) < Math.min(Bbox1maxY, Dbox3maxY))
            || (Math.max(Bbox1minX, Dbox4minX) < Math.min(Bbox1maxX, Dbox4maxX) && Math.max(Bbox1minY, Dbox4minY) < Math.min(Bbox1maxY, Dbox4maxY)) 
            || (Math.max(Bbox2minX, Dbox1minX) < Math.min(Bbox2maxX, Dbox1maxX) && Math.max(Bbox2minY, Dbox1minY) < Math.min(Bbox2maxY, Dbox1maxY)) 
            || (Math.max(Bbox2minX, Dbox2minX) < Math.min(Bbox2maxX, Dbox2maxX) && Math.max(Bbox2minY, Dbox2minY) < Math.min(Bbox2maxY, Dbox2maxY)) 
            || (Math.max(Bbox2minX, Dbox3minX) < Math.min(Bbox2maxX, Dbox3maxX) && Math.max(Bbox2minY, Dbox3minY) < Math.min(Bbox2maxY, Dbox3maxY)) 
            || (Math.max(Bbox2minX, Dbox4minX) < Math.min(Bbox2maxX, Dbox4maxX) && Math.max(Bbox2minY, Dbox4minY) < Math.min(Bbox2maxY, Dbox4maxY))
        ) hitFlag = 1

        if(hitFlag) return true
        else return false
    } else return false

}
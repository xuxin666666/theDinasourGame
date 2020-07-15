function drawBgImage(canvas, imgsrc, moveBg) {
    var ctx = canvas.getContext('2d')
    var image = new Image()
    image.onload = function () {
        ctx.drawImage(image, 0, 0, 1200, 30, 0, 400, 1200, 30)
        moveBg(image)
    }
    image.src = imgsrc
}

var bgOffset = 0
function moveBgImage(canvas, image, speed) {
    var ctx = canvas.getContext('2d')
    bgOffset += speed
    if (bgOffset >= 1800) bgOffset = 0
    ctx.clearRect(0, 0, 1200, 500)
    if (bgOffset <= 600) {
        ctx.drawImage(image, bgOffset, 0, 1200, 30, 0, 400, 1200, 30)
    } else {
        ctx.drawImage(image, bgOffset, 0, 1800 - bgOffset, 30, 0, 400, 1800 - bgOffset, 30)
        ctx.drawImage(image, 0, 0, bgOffset, 30, 1800 - bgOffset, 400, bgOffset, 30)
    }
}
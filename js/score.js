function drawScore(canvas, image, score){
    var ctx = canvas.getContext('2d')
    var numList = [], num
    for(var i = 0; i < 5; i++){
        num = score % 10
        score = (score - num) / 10
        numList.push(num)
    }
    num5 = score % 10
    num4 = (score - num5)  / 10 % 10
    num3 = (score - num4) % 1000
    num2 = (score - num3) % 10000
    num1 = (score - num2) % 100000
    ctx.drawImage(image, 222, 0, 48, 30, 900, 50, 48, 30)
    ctx.drawImage(image, numList[4] * 22, 0, 22, 30, 970, 50, 22, 30)
    ctx.drawImage(image, numList[3] * 22, 0, 22, 30, 994, 50, 22, 30)
    ctx.drawImage(image, numList[2] * 22, 0, 22, 30, 1018, 50, 22, 30)
    ctx.drawImage(image, numList[1] * 22, 0, 22, 30, 1042, 50, 22, 30)
    ctx.drawImage(image, numList[0] * 22, 0, 22, 30, 1066, 50, 22, 30)
}
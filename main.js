var img0 = $('div img').eq(0)
var buttons = $('button')

for (let i = 0; i < buttons.length; i++) {
  $('button').eq(i).click(function () {
    activeImg(img0,i)
    activeButton(buttons,i)
    p = i//增加该段代码，是为了在点击按钮后把p和i保持一致，不然p会一致自动加1，这样就有可能跳过一些图片或者不从点击的图片开始滚动
  })
}

var p = -1
var size=buttons.length
var timeId = setTimer()

function activeImg($img0,i) {
  $img0.removeClass()
  $img0.css({'margin-left': i*-400+'px'})
}

function activeButton($button,i) {
  $button.removeClass('red')
  $('button').eq(i).addClass('red')
}

function setTimer(){
  return setInterval(() => {
  p++;
  $('button').eq(p % size).trigger('click')
}, 2000);
}

$('button').mouseenter(function () {
  clearTimeout(timeId)
})

$('button').mouseleave(function () {
  timeId = setTimer()
})

$('div').mouseenter(function () {
  clearTimeout(timeId)
})

$('div').mouseleave(function () {
  timeId = setTimer()
})

var img0 = $('div img').eq(0)
var buttons = $('button')

for (let i = 0; i < buttons.length; i++) {
  $('button').eq(i).click(function () {
    // img0.removeClass()
    //     img0.css('margin-left', function() {
    //       let size = i * -200 + 'px'
    //       console.log(size)
    //       return size
    //     })
    img0.css({ 'margin-left': i * -200 + 'px' })//该部分第12行代码也可以改成6到11行代码
    buttons.removeClass('red')
    $('button').eq(i).addClass('red')
    p = i//增加该段代码，是为了在点击按钮后把p和i保持一致，不然p会一致自动加1，这样就有可能跳过一些图片或者不从点击的图片开始滚动
  })
}

var p = -1
var size=buttons.length
var timeId = setInterval(() => {
  p++;
  $('button').eq(p % size).trigger('click')//当setInterval里面的函数触发了tringger后，会接着触发click，也就是帮助人去点击操作
  console.log(p, p % size)
}, 2000);

$('button').mouseenter(function () {
  clearTimeout(timeId)
})

$('button').mouseleave(function () {
  timeId = setInterval(() => {
    p++;
    $('button').eq(p % size).trigger('click')
  }, 2000);
})

$('div').mouseenter(function () {
  clearTimeout(timeId)
})

$('div').mouseleave(function () {
  timeId = setInterval(() => {
    p++;
    $('button').eq(p % size).trigger('click')
  }, 2000);
})

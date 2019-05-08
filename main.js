var img0=$('div img').eq(0)
var buttons=$('button')
var imgArray=['first','second','third','forth']

for(let i=0;i<buttons.length;i++){
  $('button').eq(i).click(function() {
  img0.removeClass()
  img0.addClass(imgArray[i])
  buttons.removeClass('red')
  $('button').eq(i).addClass('red')
  p=i//增加该段代码，是为了在点击按钮后把p和i保持一致，不然p会一致自动加1，这样就有可能跳过一些图片或者不从点击的图片开始滚动
})
}

var p=-1
  var timeId=setInterval(() => {
    p++;
    $('button').eq(p%4).trigger('click')//当setInterval里面的函数触发了tringger后，会接着触发click，也就是帮助人去点击操作
    console.log(p,p%4)
  }, 1000);

  $('button').mouseenter(function() {
    clearTimeout(timeId)
  })
  
  $('button').mouseleave(function() {
    timeId=setInterval(() => {
      p++;
      $('button').eq(p%4).trigger('click')
    }, 1000);
  })
  
  $('div').mouseenter(function() {
    clearTimeout(timeId)
  })
  
  $('div').mouseleave(function() {
    timeId=setInterval(() => {
      p++;
      $('button').eq(p%4).trigger('click')
    }, 1000);
  })

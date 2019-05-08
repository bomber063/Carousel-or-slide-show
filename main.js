var img0=$('div img').eq(0)
var buttons=$('button')
var imgArray=['first','second','third','forth']

for(let i=0;i<buttons.length;i++){
  $('button').eq(i).click(function() {
  img0.removeClass()
  img0.addClass(imgArray[i])
  buttons.removeClass('red')
  $('button').eq(i).addClass('red')
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

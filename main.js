var img0=$('div img').eq(0)
var img1=$('div img').eq(1)
var img2=$('div img').eq(2)
var img3=$('div img').eq(3)
var imgs=$('div img')

var button0=$('button').eq(0)
var button1=$('button').eq(1)
var button2=$('button').eq(2)
var button3=$('button').eq(3)
var buttons=$('button')

button0.click(function() {
  img0.removeClass()
  img0.addClass('first')
  buttons.removeClass('red')
  button0.addClass('red')
})

button1.click(function() {
  img0.removeClass()
  img0.addClass('second')
  buttons.removeClass('red')
  button1.addClass('red')
})

button2.click(function() {
  img0.removeClass()
  img0.addClass('third')
  buttons.removeClass('red')
  button2.addClass('red')
})

button3.click(function() {
  img0.removeClass()
  img0.addClass('forth')
  buttons.removeClass('red')
  button3.addClass('red')
})
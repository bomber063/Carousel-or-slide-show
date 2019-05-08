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
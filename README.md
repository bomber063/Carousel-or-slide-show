# Carousel-or-slide-show

## 自己用jQuery写的过程
### 用到的API
#### eq()
减少匹配元素的集合为指定的索引的哪一个元素。  
[eq()中文官网说明](https://www.jquery123.com/eq/)  
[eq()W3C说明](http://www.w3school.com.cn/jquery/jquery_traversing_filtering.asp)

### for循环中用let和var的区别

[let在MDN中的说明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let)  

#### 用var
部分代码  
```
for(var i=0;i<buttons.length;i++){
  $('button').eq(i).click(function() {
  img0.removeClass()i
  img0.addClass(imgArray[i])
  buttons.removeClass('red')
  $('button').eq(i).addClass('red')
  console.log(i)//这里的i会按照函数的最后一个值，也就是4来输出。因为var i是函数级变量，4个内部函数都指向了同一个 i ,而 i 最后一次赋值是4  
})
console.log(i)//这里的i会输出0,1,2,3
}
```
**var i是函数级变量，4个内部函数都指向了同一个i**  
#### 用let
```
for(let i=0;i<buttons.length;i++){
  $('button').eq(i).click(function() {
  img0.removeClass()i
  img0.addClass(imgArray[i])
  buttons.removeClass('red')
  $('button').eq(i).addClass('red')
  console.log(i)//这里的i会按照块级别作用域分别生成自己的作用域（没进入一次花括号内的就生成一个块级域），也就是有四个值——对应0,1,2,3来输出。因为let i是块级变量，四个内部块（四个生成的花括号）都指向了不同的 i ,分别是0,1,2,3。  
})
console.log(i)//这里的i会输出0,1,2,3
}
```
**let i 变成块级域（也就是花括号中的块，每进入一次花括号就生成了一个块级域）,所以 4 个内部函数指向了不同的 i**




[jsbin代码](https://jsbin.com/zexiwizace/edit?html,js,output)


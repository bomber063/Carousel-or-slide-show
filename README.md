# Carousel-or-slide-show

## 自己用jQuery写的过程
### 用到的jQuery的API
#### jQuery()
jQuery()也可以写成$()。  
返回匹配的元素集合，无论是通过在DOM的基础上传递的参数还是创建一个HTML字符串。  
接受一个包含一个CSS选择器(包括元素、属性等选择器)的字符串，用于匹配的一组元素。  
[jQuery()中文官网说明](https://www.jquery123.com/jQuery/)  
[jQuery的w3school说明](http://www.w3school.com.cn/jquery/jquery_selectors.asp)  


#### eq()
减少匹配元素的集合为指定的索引的哪一个元素。  
[eq()中文官网说明](https://www.jquery123.com/eq/)  
[eq()w3school说明](http://www.w3school.com.cn/jquery/jquery_traversing_filtering.asp)

#### .click()
为 JavaScript 的"click" 事件绑定一个处理器，或者触发元素上的 "click" 事件。
此代码方式是.click(function(){}),**跟原生JS不同**
[.click()jQuery中文文档说明](https://www.jquery123.com/click/)  
[.click()在w3school说明](http://www.w3school.com.cn/jquery/jquery_events.asp)

比如代码
```
for(let i=0;i<buttons.length;i++){
  $('button').eq(i).click(function() {
  img0.removeClass()
  img0.addClass(imgArray[i])
  buttons.removeClass('red')
  $('button').eq(i).addClass('red')
})
}
```
#### addClass()
[addClass()的jQuery中文文档说明](https://www.jquery123.com/addClass/)  
[addClass()的w3school说明](http://www.w3school.com.cn/jquery/jquery_css_classes.asp)
为每个匹配的元素添加指定的样式类名
对所有匹配的元素可以一次添加多个用空格隔开的样式类名, 像这样：  
`$("p").addClass("myClass yourClass");`

这个方法通常和 .removeClass() 一起使用用来切换元素的样式, 像这样：  
`$('p').removeClass('myClass noClass').addClass('yourClass');`

#### removeClass()
[removeClass()的jQuery中文文档说明](https://www.jquery123.com/removeClass/)
[removeClass()的w3school说明](http://www.w3school.com.cn/jquery/jquery_css_classes.asp)
移除集合中每个匹配元素上一个，多个或全部样式。
如果一个样式类名作为一个参数,只有这样式类会被从匹配的元素集合中删除，如果没有样式名作为参数，那么所有的样式类将被移除。

从所有匹配的每个元素中同时移除多个用空格隔开的样式类 ，像这样:  
`$('p').removeClass('myClass yourClass')`

这个方法通常和 .addClass() 一起使用用来切换元素的样式, 像这样：  
`$('p').removeClass('myClass noClass').addClass('yourClass');`

#### .trigger()
[.trigger()的jQuery中文文档说明](https://www.jquery123.com/trigger/)  
[.trigger()的w3school说明](http://www.w3school.com.cn/jquery/event_trigger.asp)  
根据绑定到匹配元素的给定的事件类型执行所有的处理程序和行为。
把.trigger('click')放入到一个函数里面，如果该函数执行的时候，那么会自动执行这个click事件(**也就是帮助人去点击操作**).比如下面代码
```
for(let i=0;i<buttons.length;i++){
  $('button').eq(i).click(function() {
  img0.removeClass()
  img0.addClass(imgArray[i])
  buttons.removeClass('red')
  $('button').eq(i).addClass('red')
})
}//这里面有click事件点击之后执行的函数  
  
var p=-1
  var timeId=setInterval(() => {
    p++;
    $('button').eq(p%4).trigger('click')//这里会在setInterval里面的函数触发后，接着去触发上面的click函数里面的内容
    console.log(p,p%4)
  }, 1000);
```

可以查看[JSbin的代码](https://jsbin.com/waqafufuke/1/edit?html,js,output)，更直观

### 用到的JS原生的API
#### set​Interval
[set​IntervalMDN说明](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval)  

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
部分代码  
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

可以点击[jsbin代码](https://jsbin.com/zexiwizace/edit?html,js,output)，可以更直观的测试  

## 修复一个小bug
由于点击按钮后p的值会一直增加，并且p%4的结果会与i不能保持同步，所以为了保持同步，增加了一句代码，赋值p=i，把p和i保持一致，不然p会一致自动加1，这样就有可能跳过一些图片或者不从点击的图片开始滚动。  
最后的[JSbin代码](https://jsbin.com/zukedogisi/1/edit?html,js,output)

## CSS用的不多的方法
[display:flex;](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)  
[justify-content:flex-start;](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content)  

发现不用justify-content:flex-start也不影响效果。  
另外发现方方的代码这里用的是[align-items:flex-start](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)，并且删除掉也不影响效果。  

## 经过与方方老师对比后发现不足的地方
### JQ中使用API——.css()可以节省很多CSS文件的代码
[.css()的JQ中文文档](https://www.jquery123.com/css/#css2)  
[.css()的JQ的w3school文档](http://www.w3school.com.cn/jquery/jquery_css.asp)
获取匹配元素集合中的第一个元素的样式属性的值（**传入一个参数**）  或  设置每个匹配元素的一个或多个CSS属性（**传入两个参数**）。

传入两个参数来设置匹配元素的CSS属性用了两种方法：  
1. 一种是.css( propertyName, value )  
`img0.css({ 'margin-left': i * -200 + 'px' })//该部分第12行代码也可以改成6到11行代码`  
2. 另一种是用函数返回，.css( propertyName, function(index, value) )  
```
         img0.css('margin-left', function() {
           let size = i * -200 + 'px'
           console.log(size)
           return size
         })
```
这其中犯了一个**很低级的错误**，把margin-left写成了mar**i**gin-left,导致调试了半天晕头转向，可能今天累了吧，哈哈。

### eq(p % 4)改成eq(p % size)
其中  
`var size=buttons.length`  
这样更有利于代码的可维护性。  

### 没有封装函数
封装了三个函数：  
1. 激活某张图片  
```
function activeImg($img0,i) {
  $img0.removeClass()
  $img0.css({'margin-left': i*-200+'px'})
}
```
也可以是  
```
function activeImg($img0,i) {
  $img0.removeClass()
  $img0.css('margin-left', function() {
    let size = i * -200 + 'px'
    console.log(size)
   return size
  })
```
2. 激活某个按钮  
```
function activeButton($button,i) {
  $button.removeClass('red')
  $('button').eq(i).addClass('red')
}
```
3. 根据时间间隔自动滚动  
```
function setTimer(){
  return setInterval(() => {
  p++;
  $('button').eq(p % size).trigger('click')
}, 2000);
}
```
### 方方老师用的，但是我没有用到的JQ的API
#### index()
[index()在JQ中文文档说明](https://www.jquery123.com/index/)  
[index()在w3school中的说明](http://www.w3school.com.cn/jquery/dom_element_methods_index.asp)  
从匹配的元素中搜索给定元素的索引值，从0开始计数。  
如果**不传递任何参数**给 .index() 方法，则返回值就是jQuery对象中第一个元素相对于它**同辈元素的位置**。  
如果在**一组元素**上调用 .index() ，并且参数是一个DOM元素或jQuery对象， .index() 返回值就是**传入的元素相对于原先集合的位置**。  

#### .siblings()
[.siblings()在JQ中文文档说明](https://www.jquery123.com/siblings/)  
[.siblings()在w3school中的说明](http://www.w3school.com.cn/jquery/jquery_traversing_siblings.asp)  
获得匹配元素集合中每个元素的**兄弟元素**,可以提供一个可选的选择器。  

#### on()
在选定的元素上绑定一个或多个事件处理函数。  
[.on()的JQ中文文档说明](https://www.jquery123.com/on/)  
[.on()W3School说明](http://www.w3school.com.cn/jquerymobile/jquerymobile_events_touch.asp)  
[.on()W3cSclool说明](https://www.w3cschool.cn/jquery/event-on.html)  

#### transform:translate() or transform:translateX()
方方老师用的是.css(transform:translate())  
视频中测试的显示浏览器放大的时候，用该CSS属性滚动的时候会抖动，但是我自己测试了没有发现抖动，可能环境不太一样吧。  

我的代码如果改成transform:translate()就需要调整整个img图片，而不是第一个张img图片
代码修改为[jsbin预览](https://jsbin.com/wobabiruhi/1/edit?html,js,output)  

## 没有考虑重排问题
由于<img>是一个[可替换元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element),可替换元素（replaced element）的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。  
用这里的<img>举例子就是，在图片下载下来之前，页面不知道这个图片是什么样子，比如不知道宽高是多少，这样这个元素就会先做一个占位符来占位。等图片下载下来之后就会把下载的图片替换这个占位符，一般是没有图片或者图片错误就会显示这个占位符。这里的占位符可以用[alt属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img)来控制。  
所以当占位符的宽高和下载的图片宽高不一致的时候，就会导致**重排**，也就是占位符的宽高使得图片已经排列好了，如果下载图片后发现宽高和占位符的不一样，这样就会导致**重新再排列一次**，该占位符后面的图片都会往后退或者往前靠，这个跟以前博客说道的内存一样，如果导致重排会特别浪费性能，会耗CPU，多渲染一次。    
页面性能优化的其中一个注意点就是，如果已经知道可替换元素，比如图片的宽高，最好把宽高都写出来，这样浏览器就不会触发重排，也就是不会让后面的图片让位的过程。   
如果不知道下载后的图片大小，那么只能影响性能触发重排，耗费CPU了，多渲染一次。   

经过处理后最后的代码(margin-left实现的)可以查看[JSbin](https://jsbin.com/yepoqoxasa/1/edit?html,css,output)  

考虑重排问题后，把宽高都写上的[jsbin代码查看](https://jsbin.com/qagunujowu/1/edit?html,js,output)  

方方老师的代码[JSbin](http://js.jirengu.com/botamiwinu/1/edit?html,js,output)  

## git方法
由于传错了一次commit描述，所以搜了一些git的方法来记录  
### git查询对比远程和本地仓库内容信息有什么不同(git diff)
查询**内容**信息有什么不同  
这里查询的是commit之后的信息的内容有什么不同。  
解决方法：  
`git diff <local branch> <remote>/<remote branch>`  
`<local branch>本地分支`  
`<remote>远程仓库名`  
`<remote branch>远程分支`  
如果远程本地仓库分支名字叫做master，远程仓库分支名字叫做master,并且远程的仓库名字一般都是origin（可以通过git remote查询）  
那么就可以写成git diff master origin/master  

### git 查询对比提交的commit有什么不同(git log)
查询**commit**信息有什么不同
两个分支名字分别为 master和sidebar
1. 查看 dev 有，而 master 中没有的：  
`git log sidebar ^master`  
同理查看 master 中有，而 dev 中没有的内容：  
`git log master ^sidebar`  

2. 查看 dev 中比 master 中多提交了哪些内容：  
`git log master..sidebar`  

注意，列出来的是两个点后边（此处即dev）多提交的内容。同理，想知道 master 比 dev 多提交了什么：  
`git log sidebar..master`  

3. 不知道谁提交的多谁提交的少，单纯想知道有什么不一样：
`git log sidebar...master`  

### 重置(git reset)

**已经推到远程的分支上**，之后发现中间有错误的信息，需要回退进行更改：
使用重置（reset）会**清除 commit！**
可以用来：

* 将 HEAD 和当前分支指针移到目标 commit
* 清除 commit
* 将 commit 的更改移到暂存区
* 取消暂存 commit 的更改

找到相应的SHA，可以通过HEAD^或者HEAD~或者直接写出SHA
SHA可以通过一下方式来查询
`git log --oneline`

git reset 的选项
git 根据所使用选项来判断是**清除**(--hard)、暂存之前 commit 的更改(--soft)，还是取消暂存之前 commit 的更改(--mixed，默认也是--mixed)。这些选项包括：

* --mixed(比如git reset --mixed HEAD^)
* --soft(比如git reset --soft HEAD^)
* --hard(比如git reset --hard HEAD^)

**尽量不要使用--hard方法。因为是清除所有信息。**
如果不写，默认就是--mixed。

使用 git reset 命令将清除当前分支上的 commit。建议在当前 commit 上创建一个分支，以便用作备份。如果出现错误，我可以返回这些 commit.

了解了以上的信息后，接下来只需要三步：

1. 重置

`git reset HEAD^`

2. 修改并重新commit

`加上新的修改并提交：git commit -m "New commit message"`

3. 强制上传

`git push --force`

### 还原(git revert)
`git revert HEAD^`
这是针对**commit之后**的操作
当你告诉 git 还原（revert） 具体的 commit 时，git 会执行和 commit 中的**更改完全相反的更改**。我们详细讲解下。
1. 假设 commit A **添加了一个字符**，如果 git **还原** commit A，那么 git 将创建一个新的 commit，并**删掉该字符**。  
2. 假设**删掉了一个字符**，那么**还原**该 commit 将把该内容**添加回来**,别忘记也会出现一个新的commit。

说明还原的同时也会针对这次还原提交一个commit。

此命令：

* 将撤消目标 commit 所做出的更改
* 创建一个新的 commit 来记录这一**还原更改**

## 拓展
[苹果风格的轮播](https://jscode.me/t/topic/761)——[跳转页面](https://demo.tutorialzine.com/2009/11/beautiful-apple-gallery-slideshow/demo.html)  
[科技感十足的轮播](https://jscode.me/t/topic/762)——[跳转页面](http://idangero.us/swiper/)  
[可能是最厉害的轮播组件](https://jscode.me/t/topic/763)——[跳转页面](http://idangero.us/swiper/demos/)——[github页面](https://github.com/bomber063/swiper)  

[仅用CSS实现的轮播](https://jscode.me/t/css/718),不过图片已经没了。  

[还有一个小练习预览](https://fangyinghang.com/google_doodle_clone/2013-4-29/index.html)  
[代码地址](https://github.com/FrankFang/google_doodle_clone)  

[JQ在W3Cschool的学习地址](https://www.w3cschool.cn/jquery/?)  
[JQ在W3school的学习地址](http://www.w3school.com.cn/jquery/index.asp)  
[JQ官方中文版](https://www.jquery123.com/)  
[JQ官方英文版](https://jquery.com/)  








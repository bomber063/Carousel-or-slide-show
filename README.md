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

## git方法
### git查询对比远程和本地仓库内容信息有什么不同
查询**内容**信息有什么不同  
这里查询的是commit之后的信息的内容有什么不同。  
解决方法：git diff <local branch> <remote>/<remote branch>  
<local branch>本地分支  
<remote>远程仓库名  
<remote branch>远程分支  
如果远程本地仓库分支名字叫做master，远程仓库分支名字叫做master,并且远程的仓库名字一般都是origin（可以通过git remote查询）  
那么就可以写成git diff master origin/master  

### git 查询对比提交的commit有什么不同
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

### 重置

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

尽量不要使用--hard方法。因为是清除所有信息。
如果不写，默认就是--mixed。

使用 git reset 命令将清除当前分支上的 commit。建议在当前 commit 上创建一个分支，以便用作备份。如果出现错误，我可以返回这些 commit.

了解了以上的信息后，接下来只需要三步：

1. 重置

`git reset HEAD^`

2. 修改并重新commit

`加上新的修改并提交：git commit -m "New commit message"`

3. 强制上传

`git push --force`

新加的字










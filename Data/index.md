<!-- 
layout: layout.html
title: JavaScript案例
date: 2015-02-01
modifiedOn: 2015-02-01
-->

## 使用JavaScript字符串
### 从一个字符串提取子字符串

** 问题 **
有一个字符串是由几个句子组成的，其中的一个句子拥有一个项目列表。该列表以一个冒号开始(:)，以一个句点结束(.)。你想要提取这个列表。

```js

var sItem = "This is a List of items: cherries,orange,apples,bananas.";

```

** 解决方案 **
使用String的indexOf方法找到冒号，然后再使用indeOf找到冒号后面的第一个句点。有了这两个位置，使用String的substring方法提取字符串。

```js

var sItem = "This is a List of items: cherries,orange,apples,bananas.";

var start = sItem.indexOf(":");
var end = sItem.indexOf(".",start+1);

var list = sItem.substring(start+1,end);

```
### 检查一个存在的、非空的字符串

** 问题 **
想要检查一个已经定义的变量，是一个字符串，并且它不为空

** 解决方案 **
使用typeOf运算符，valueOf方法以及String的length属性来创建一个条件检测，以确保一个变量是存在的，是一个字符串，并且不为空。

```js

if((typeof names != 'undefined') && (typeof names.valueOf() == 'string') && names.length > 0){
	...
}

```
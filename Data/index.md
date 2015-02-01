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

var sentence = "This is one sentence. This is a sentence with a List of items: cherries,orange,apples,bananas.";

```

** 解决方案 **
使用String的indexOf方法找到冒号，然后再使用indeOf找到冒号后面的第一个句点。有了这两个位置，使用String的substring方法提取字符串。

```js

var sentence = "This is one sentence. This is a sentence with a List of items: cherries,orange,apples,bananas.";

var start = sentence.indexOf(":");
var end = sentence.indexOf(".",start+1);

var list = sentence.substring(start+1,end);

```
<!-- 
layout: layout.html
title: JavaScript案例
date: 2015-02-01
modifiedOn: 2015-02-01
-->

## JavaScript操作样式
### 验证当前浏览器是否支持某个样式属性

** 问题 **
当前浏览器是否支持transform，支持返回当前属性的字符串，不支持返回undefined;

```js
	var prefixes = "Webkit Moz ms Ms O".split("");

	var docElemStyle = document.documentElement.style;

	function getStyleProperty (propname) {
		if (!propname) {
			return;
		};
		if (typeof docElemStyle[propname] === "string") {
			return propname;
		};
		propname = propname.charAt(0).toUpperCase() + propname.slice(1);

		var prefixed;

		for(var i = 0,len = prefixes.length; i < len; i++){
			prefixed = prefixed[i] + propname;
			if (typeof docElemStyle[prefixed] === "string") {
				return prefixed;
			};
		}
	}
	console.log(getStyleProperty("transform"));
```
### 原生实现hasClass,addClass,removeClass,toggleClass?

```js
	var domClass = function(){
		var classReg = function(className){
			return new RegExp("(^|\\s+)"+className+"(\\s+|$)");
		}
		var hasClass,addClass,removeClass;
		if ("classList" in document.documentElement) {
			hasClass = function (el,cls) {
				return el.classList.contains(cls);
			};
			addClass = function (el,cls) {
				el.classList.add(cls);
			};
			removeClass = function (el,cls) {
				el.classList.remove(cls);
			};
		}else{
			hasClass = function (el,cls) {
				return classReg(cls).test(el.className);
			};
			addClass = function(el,cls) {
				if(!hasClass(el,cls)){
					el.className = el.className + " " + cls;
				}
			};
			removeClass = function (el,cls) {
				el.className = el.className.replace(classReg(cls),"");
			};
		};
		function toggleClass(el,cls){
			var fn = hasClass(el.cls) ? removeClass : addClass;
			fn(el,cls);
		};

		return {
			has : hasClass,
			add : addClass,
			remove : removeClass,
			toggle : toggleClass
		}
	}();
	console.log(domClass.has);
```

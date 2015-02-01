/**
 * controller
 * @return 
 */
var fs = require("fs");
var path = require("path");
var marked = require("marked");
// 当前项目的根目录
var root = path.resolve(APP_PATH, '..');

var hreg = /(<h2[^<>]*>(.*?)<\/h2>)/g;
var titReg = /title:[\s]?(\S*)/g

module.exports = Controller("Home/BaseController", function(){
	"use strict";
	return {
		indexAction: function(){
			var self = this;
			var viewFile = root+"/Data/index.md";
			var layoutFile = VIEW_PATH + "/_layout/layout.html";
			var layoutContent = "";
			return this.fetch(layoutFile).then(function(content){
				layoutContent = content;
				return self.fetch(viewFile);
			}).then(function(content){
				content = marked(content);
				content = content.replace(titReg,function(a,b){
					layoutContent = layoutContent.replace('<!--!doc-title-->',b);
				});
				content = content.replace(hreg,function(a){
					return '<div class="chapter">'+a+'</div>';
				});
				layoutContent = layoutContent.replace('<!--!doc-content-->', content);
				return self.end(layoutContent);
			});
		}
	};
});

/**
 * controller
 * @return 
 */
var fs = require("fs");
var path = require("path");
var marked = require("marked");
var markToc = require("marked-toc");
var uslug = require('uslug');
// 当前项目的根目录
var root = path.resolve(APP_PATH, '..');

var hreg = /<h(\d)[^<>]*>(.*?)<\/h\1>/g;

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
				var toc = marked(markToc(content));
				content = marked(content);
				
				content = content.replace(hreg,function(a,b,c){
					var id = uslug(c, {allowedChars: "-"});
					return '<div class="chapter"><h'+b+' id="'+id+'">'+c+'</h'+b+'></div>';
				});

				layoutContent = layoutContent.replace('<!--!doc-content-->', content);
				layoutContent = layoutContent.replace('<!--!toc-content-->', toc);
				return self.end(layoutContent);
			});
		}
	};
});

module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat:{
			distjs:{
				options:{separator:";"},
				src:['www/resource/module/modernizr-2.8.3.js','www/resource/module/highlight/highlight.pack.js'],
				dest:'www/resource/js/built.js'
			},
			distcss:{
				options:{separator:""},
				src:['www/resource/css/foundation.css','www/resource/css/main.css','www/resource/module/highlight/styles/pojoaque.css'],
				dest:'www/resource/css/built.css'
			}
		},
		uglify:{
			options:{
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> -' +
				'<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			dist:{
				files:[
					{src:'<%= concat.distjs.dest %>',dest:'www/resource/js/built.min.js'},
				]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['concat','uglify']);
};
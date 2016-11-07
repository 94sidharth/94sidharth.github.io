module.exports=function(grunt){

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		imagemin: {
			static: {
				options: {
					optimizationLevel : 7
					//svgoPlugins: [{removeViewBox: false}],
					//use: [mozjpeg()]
				},
				files:{
					'img/2048.png' : 'src/2048.png',
					'img/cam_be_like.jpg' : 'src/cam_be_like.jpg',
					'img/mobilewebdev.jpg' : 'src/mobilewebdev.jpg',
					'img/profilepic.jpg' : 'src/profilepic.jpg'
				} 
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['imagemin']);
};
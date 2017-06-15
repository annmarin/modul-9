module.exports = function(grunt) {

  // Project configuration.
	grunt.initConfig({
  		sass: {
    		options: {
        		sourceMap: true
      		},
      		dist: {
        		files: {
        			'css/style.css': 'sass/style.sass'
        		}
      		}
    	},
		imagemin: {
    		dynamic: {
        		files: [{
            		expand: true,
            		cwd: 'images/',
            		src: ['**/*.{png,jpg,gif,jpeg}'],
            		dest: 'images/build/'
        		}]
    		}
		},
		watch: {
    		scripts: {
        		files: ['sass/style.sass'],
        		tasks: ['sass'],
        		options: {
          			spawn: false,
        		},
    		} 
		},
		jshint: {
      		all: ['js/scripts.js']
    	}    
	});
  // Load the plugins tasks
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-imagemin'); 
grunt.loadNpmTasks('grunt-contrib-watch'); 
grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
grunt.registerTask('default', ['sass', 'imagemin', 'watch', 'jshint']);
};
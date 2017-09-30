module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*Taras Polovko project <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        footer: '\n\n/* This is a string in the end of minified file */',
        mangle: {}
      },
      build: {
        src: 'js/dist/script.main.min.js',
        dest: 'js/dist/script.main.min.js'
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/source/*.js'],
        dest: 'js/dist/script.main.min.js',
      },
    },
    concat_css: {
      options: {
        // Task-specific options go here. 
      },
      all: {
        src: ["css/source/*.css"],
        dest: "css/dist/style.main.min.css"
      },
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/dist/style.main.min.css': ['css/dist/style.main.min.css']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'csmin']);
  grunt.registerTask('js', ['concat', 'uglify']);
  grunt.registerTask('css', ['concat_css', 'cssmin']);
};
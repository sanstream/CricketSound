module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat:{
            dist:{
                src: [
                    'js/routes.js'
                ],
                dest:'js/build/production.js'
            }
        },

        sass: {
            dist: {
                files: {
                    'www/css/index.css' : 'www/sass/main.scss'
                }
            }
        },

        watch: {
            css: {
                files: 'www/**/*.scss',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default',['watch']);
}
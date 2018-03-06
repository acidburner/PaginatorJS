//node_modules\.bin\eslint * --fix
module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', ['browserify', 'eslint', 'watch']);
    grunt.registerTask('build', ['browserify', 'eslint']);

    grunt.initConfig({
        /**
         * Write ES6 today, compile it to ES5.
         */
        browserify: {
            dist: {
                options: {
                    browserifyOptions: { debug: true }
                },
                files: {
                    'dist/app.js': ['src/js/**/*.js']
                }
            }
        },
        /**
         * Validates ES6 files via ESLint.
         */
        eslint: {
            options: {
                configFile: '.eslintrc'
            },
            target: 'src/js/**/*.js'
        },
        /**
         * Run predefined tasks whenever watched files are added,
         * modified or deleted.
         */
        watch: {
            scripts: {
                files: ['src/js/**/*.js'],
                tasks: ['browserify', 'eslint']
            }
        }
    });
};
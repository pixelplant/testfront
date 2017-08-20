'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        watch: {
            // if any .scss file changes in directory "/scss" run the "sass"-task.
            files: "scss/**/*.scss",
            tasks: ["sass"]
        },
        // "sass"-task configuration
        sass: {
            // production config is also available
            dist: {
                files: {
                    'css/app-ui.css': 'scss/app-ui.scss',
                }
            }
        }
    });
    // the default task (running "grunt" in console) is "watch"
    grunt.registerTask('default', ['watch']);
};

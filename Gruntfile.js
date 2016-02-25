module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: 'sources/sass',
                    cssDir: 'distribution/css',
                    imagesDir: "../distribution/img",
                    relativeAssets: true,
                    outputStyle: 'compressed',
                    environment: 'production'
                }
            }
        },
        watch: {
            css: {
                files: ['**/*.scss','**/*.sass'],
                tasks: ['compass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
}
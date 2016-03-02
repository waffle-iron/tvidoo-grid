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
        },
        md2html: {
            one_file: {
                options: {
                    layout: 'layout.html',
                    highlightjs: {
                        enabled: true,
                        style: 'paraiso.dark',
                        compressStyle: true
                    },
                    markedOptions: {
                        gfm: true
                    }
                },
                files: [{
                    src: ['sources/**/*.md'],
                    dest: 'doc/styleguide.html'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-md2html');
    grunt.registerTask('default',['watch']);
}
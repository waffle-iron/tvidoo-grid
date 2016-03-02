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
        livingstyleguide: {
            generate: {
                options: {
                    src: 'sass/styleguide.lsg',
                    dest: 'doc/styleguide.html'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-livingstyleguide');
    grunt.registerTask('default',['watch']);
}
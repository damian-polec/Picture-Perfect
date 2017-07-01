
module.exports = function(grunt) {

  //Project configuration
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dev: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'css/*css',
            '*.html'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
        }
      }
    }
  });

  //Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  //Default task(s)
  grunt.registerTask('default', ['browserSync', 'watch']);
};

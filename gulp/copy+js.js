var gulp   = require('gulp'),
    config = minigulp.config,
    $      = minigulp.plugins;

module.exports = function() {
    var path = config.path.copy;
    gulp.task('copy', function () {
        var files = path.init,
            stream,
            i;
        for (i = 0; i < files.length; i++) {
            stream = gulp.src(files[i].from)
                .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
                .pipe(gulp.dest(files[i].to));
        }
        return stream;
    });
    gulp.task('copy:js', function() {
        return gulp.src(path.js.from)
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe(gulp.dest(path.js.to))
            .pipe($.browser.reload({stream: true}));
    });
}();

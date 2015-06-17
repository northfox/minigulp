var gulp   = require('gulp'),
    config = minigulp.config,
    $      = minigulp.plugins;

module.exports = function() {
    gulp.task('imagemin', function() {
        return gulp.src(minigulp.getPath('images'))
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.imagemin(config.imagemin.options))
            .pipe(gulp.dest(minigulp.getPath('images', 'dest')))
            .pipe($.browser.reload({stream: true}));
    });
}();

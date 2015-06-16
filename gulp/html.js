var gulp   = require('gulp'),
    config = minigulp.config,
    $      = minigulp.plugins;

module.exports = function() {
    gulp.task('html', function () {
        return gulp.src(minigulp.getPath('html'))
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.htmlhint(minigulp.config.htmlhint))
            .pipe($.htmlhint.reporter())
            .pipe($.htmlhint.failReporter())
            .pipe($.browser.reload({stream: true}));
    });
}();

var gulp   = require('gulp'),
    config = minigulp.config,
    $      = minigulp.plugins;

module.exports = function() {
    gulp.task('coffee', function () {
        return gulp.src(minigulp.getPath('coffee'))
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.coffee(config.coffee.options))
            .pipe(gulp.dest(minigulp.getPath('coffee', 'dest')));
    });
}();

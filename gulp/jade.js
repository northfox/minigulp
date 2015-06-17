var gulp   = require('gulp'),
    config = minigulp.config,
    $      = minigulp.plugins;

module.exports = function() {
    gulp.task('jade', function () {
        return gulp.src(minigulp.getPath('jade'))
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.jade({
                data: require(config.jade.data, true),
                pretty: true
            }))
            .pipe(gulp.dest(minigulp.getPath('jade', 'dest')))
            .pipe($.browser.reload({stream: true}));
    });
}();

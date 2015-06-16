var gulp   = require('gulp'),
    config = minigulp.config,
    $      = minigulp.plugins;

module.exports = function() {
    gulp.task('test', function() {
        return generateTestTask(false);
    });
    gulp.task('test:watch', function() {
        return generateTestTask(true);
    });

    function generateTestTask(watch) {
        return gulp.src(minigulp.getPath('test'))
            .pipe($.karma({
                configFile: config.karma.conf,
                action: watch ? 'watch' : 'run'
            }));
    }
}();

var gulp   = require('gulp'),
    config = minigulp.config,
    $      = minigulp.plugins,
    del    = require('del');

module.exports = function() {
    gulp.task('clean', function (callback) {
        del([
            minigulp.getPath('jade', 'dest')
        ], callback);
    });
}();

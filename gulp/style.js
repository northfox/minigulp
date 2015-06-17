var gulp   = require('gulp'),
    config = minigulp.config,
    $      = minigulp.plugins,
    pkg    = minigulp.pkg;

module.exports = function() {
    gulp.task('style', function() {
        if(minigulp.option.dev) {
            config.sass.options.sourceMap = true;
            config.sass.options.style = 'expanded';
        }

        return gulp.src(minigulp.getPath('sass'))
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.sass(config.sass.options))
            .pipe($.autoprefixer(config.autoprefixer.browser))
            .pipe($.if(minigulp.option.min, $.csso()))
            .pipe($.if(minigulp.option.min, $.csscomb()))
            .pipe($.if(minigulp.option.min, $.cssmin()))
            .pipe(gulp.dest(minigulp.getPath('sass', 'dest')))
            .pipe($.browser.reload({stream: true}));
    });
}();

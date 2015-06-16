var gulp    = require('gulp'),
    config  = minigulp.config,
    $       = minigulp.plugins,
    conf    = require('../webpack.config.js'),
    through = require('through2'),
    path    = require('path');

module.exports = function() {
    gulp.task('script', function() {
        return generateScriptTask(conf);
    });
    gulp.task('script:watch', function() {
        return generateScriptTask(conf, true);
    });

    function generateScriptTask(conf, watch) {
        var filter = $.filter('**/*.js');
        if(watch === true) {
            conf.watch = true;
        } else {
            conf.watch = false;
        }
        return gulp.src(minigulp.getPath('js'))
            .pipe(through.obj(function(file, charset, callback) {
                conf.entry = conf.entry || {};
                conf.entry[path.basename(file.path, path.extname(file.path))] = file.path;
                this.push(file);
                callback();
            }))
            .pipe($.webpack(conf))
            .pipe(filter)
            .pipe($.if(minigulp.option.min, $.uglify()))
            .pipe(filter.restore())
            .pipe(gulp.dest(minigulp.getPath('js', 'dest')))
            .pipe($.browser.reload({stream: true}));
    }
}();

var gulp   = require('gulp'),
    config = minigulp.config,
    $      = minigulp.plugins;

// https://www.npmjs.com/package/connect-modrewrite
//  - [L] If a path matches, any subsequent rewrite rules will be disregarded.
var rewrite = require('connect-modrewrite');

module.exports = function () {
    gulp.task('server', function() {
        return $.browser( {
            server: {
                baseDir: 'dist',
                directory: false,
                middleware: [
                    rewrite([
                        '^[^\\.]*$ /index.html [L]'
                    ])
                ]
            },
            port: minigulp.option.port,
            notify: false,
            ghostMode: {
                clicks: false,
                location: false,
                forms: false,
                scroll: false
            }
        });
    });
    gulp.task('server:reload',function() {
        $.browser.reload();
    });
}();

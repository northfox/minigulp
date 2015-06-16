var fs   = require('fs'),
    path = require('path');

module.exports = function() {
    // load task from ./
    var files = fs.readdirSync(__dirname),
        result = [],
        stats,
        name;

    files.forEach(function(file) {
        stats = fs.statSync(path.join(__dirname, file));
        if (stats.isFile()) {
            name = path.basename(file, '.js');
            if (name.indexOf('_') === 0) return;
            result[name] = require(__dirname + '/' + name);
        }
    });
    return result;
}();

var fs = require("fs");

module.exports = {

    // AutoPrefixer
    autoprefixer: {
        browser: [
            'last 3 version',
            'ie >= 8',
            'Android 4.0'
        ]
    },

    // Htmlhint
    htmlhint: {

    },

    // Jade
    jade: {
        options: {
            pretty: true
        },
        data: '../src/jade.json'
    },

    // Sass
    sass: {
        options: {
            errLogToConsole: true,
            sourceComments: 'normal',
            sourceMap: false,
            compass: true,
            precision: 10,
            style: 'compressed'
        }
    },

    // Coffee
    coffee: {
        options: {
            bare: true
        }
    },

    // Karma
    karma: {
        conf: 'karma.conf.js'
    },

    // Imagemin
    imagemin: {
        options: {
            progressive: true,
            interlaced: true
        }
    },

    // path
    path: {
        html: {
            src: ['dist/**/*.html', '!dist/lib/**/*']
        },
        jade: {
            watch: ['src/**/*.jade', 'src/**/*.html', '!src/lib/**/*'],
            src: ['src/**/*.jade', '!src/**/_*.jade', '!src/lib/**/*'],
            dest: 'dist/'
        },
        sass: {
            src: ['src/sass/**/*.scss', '!src/lib/**/*'],
            dest: 'dist/css'
        },
        coffee: {
            watch: ['src/**/*.coffee', '!src/lib/**/*'],
            src: ['src/**/*.coffee','!src/**/_*.coffee', '!src/lib/**/*'],
            dest: 'src/'
        },
        js: { // for [js_hint, compile]
            watch: 'src/**/*.js',
            src: ['src/js/*.js','!src/js/_*.js', '!src/lib/**/*'],
            dest: 'dist/js'
        },
        images: { // for image min
            src: 'src/images/**/*',
            dest: 'dist/images'
        },
        test: {
            src: [
                'dist/js/common.js',
                'dist/js/app.js',
                'src/**/*Spec.js',
                '!src/lib/**/*'
            ]
        },
        copy: {
            init: [
                {
                    from: 'src/lib/**/*',
                    to: 'dist/lib'
                },
                {
                    from: 'src/*.html',
                    to: 'dist/'
                }
            ],
            js: {
                from: 'src/js/page/*.js',
                to: 'dist/js/'
            }
        }
    }
};

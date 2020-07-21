// gulp一般就是做小任务

const gulp = require('gulp'),
    rollup = require('gulp-rollup'),
    babel = require('gulp-babel')
const watch = require('gulp-watch')
const entry = './src/server/**/*.js'
const clearEntry = './src/server/config/index.js'
const plumber = require('gulp-plumber');
const replace = require('@rollup/plugin-replace')

function builddev() {
    return watch(entry, { ignoreInitial: false }, () => {
        gulp.src('./src/server/app.js')
            .pipe(plumber())
            .pipe(
                babelrc({
                    babelrc: false,
                    plugins: ["@babel/plugin-transform-modules-commonjs"]
                })
            )
            .pipe(
                gulp.dest('dist')
            )
    })
}

function buildprod() {
    return gulp.src(entry)
        .pipe(
            babel({
                babelrc: false,
                ignore: [clearEntry],
                plugins: ["@babel/plugin-transform-modules-commonjs"]
            })
        )
        .pipe(
            gulp.dest('dist')
        )
}

// 清理无用变量
function buildconfig() {
    // 如何清洗?  
    return (
        gulp
            .src(entry)
            .pipe(
                rollup({
                    input: clearEntry,
                    output: {
                        format: 'cjs'
                    },
                    plugins: [
                        replace({
                            'process.env.NODE_ENV': JSON.stringify('production'),
                        })
                    ]
                })
            )
            .pipe(
                gulp.dest('./dist')
            )
    )
}


let build = gulp.series(builddev)

if (process.env.NODE_ENV === 'production') {
    build = gulp.series(buildprod, buildconfig)
}
gulp.task('default', build);
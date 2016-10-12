import gulp from 'gulp';
import gutil from 'gulp-util';
import autoprefixer from 'autoprefixer';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import cleanCSS from 'gulp-clean-css';
import runSequence from 'run-sequence';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config';

const src = {
  styles: {
    files: ['./src/assets/scss/**/*.scss', './src/assets/scss/**/*.sass'],
    task: ['styles'],
    dest: './build/css/',
  },
};

gulp.task('styles', () =>
  gulp.src(src.styles.files)
    .pipe(sass({ style: 'expanded' }))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(gulp.dest(src.styles.dest))
);

gulp.task('webpack-dev-server', (callback) => {
  new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true
  }).listen(3000, '0.0.0.0', function (err, result) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }

    gutil.log('[webpack-dev-server]', 'http://localhost:3000/webpack-dev-server/index.html');
  });
});

gulp.task('watch', () => {
  gulp.watch(src.styles.files, src.styles.task);
});

gulp.task('default', (callback) => {
  runSequence(['styles', 'watch', 'webpack-dev-server'], callback);
});

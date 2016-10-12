import gulp from 'gulp';
import autoprefixer from 'autoprefixer';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import cleanCSS from 'gulp-clean-css';
import runSequence from 'run-sequence';

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

gulp.task('watch', () => {
  gulp.watch(src.styles.files, src.styles.task);
});

gulp.task('default', (callback) => {
  runSequence(['styles', 'watch'], callback);
});

import gulp from 'gulp';
import runSequence from 'run-sequence';
import pm2 from 'pm2';

const src = {
  server: {
    name: 'server',
    script: 'src/app.js',
  },
};

gulp.task('server', () => {
  pm2.connect(true, () => {
    pm2.start(src.server, () => { pm2.streamLogs('all', 0); });
  });
});

gulp.task('watch', () => {
  gulp.watch(src.styles.files, src.styles.task);
});

gulp.task('default', (callback) => {
  runSequence(['watch', 'server'], callback);
});

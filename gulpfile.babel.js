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

gulp.task('default', (callback) => {
  runSequence(['server'], callback);
});

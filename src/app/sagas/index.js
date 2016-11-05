import pageSaga from './pageSaga';

export default function* rootSaga() {
  yield []
    .concat(pageSaga);
}

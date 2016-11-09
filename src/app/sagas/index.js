import pageCategoriesSaga from './pageCategoriesSaga';
import pagesSaga from './pagesSaga';
import pageSubCategoriesSaga from './pageSubCategoriesSaga';
import productCategoriesSaga from './productCategoriesSaga';
import productsSaga from './productsSaga';
import productSubCategoriesSaga from './productSubCategoriesSaga';

export default function* rootSaga() {
  yield []
    .concat(pageCategoriesSaga)
    .concat(pagesSaga)
    .concat(pageSubCategoriesSaga)
    .concat(productCategoriesSaga)
    .concat(productsSaga)
    .concat(productSubCategoriesSaga);
}

import loginSaga from './loginSaga';
import pageCategoriesSaga from './pageCategoriesSaga';
import pagesSaga from './pagesSaga';
import pageSubCategoriesSaga from './pageSubCategoriesSaga';
import productCategoriesSaga from './productCategoriesSaga';
import productsSaga from './productsSaga';
import productImagesSaga from './productImagesSaga';
import productOptionsSaga from './productOptionsSaga';
import productSubCategoriesSaga from './productSubCategoriesSaga';

export default function* rootSaga() {
  yield []
    .concat(loginSaga)
    .concat(pageCategoriesSaga)
    .concat(pagesSaga)
    .concat(pageSubCategoriesSaga)
    .concat(productCategoriesSaga)
    .concat(productsSaga)
    .concat(productImagesSaga)
    .concat(productOptionsSaga)
    .concat(productSubCategoriesSaga);
}

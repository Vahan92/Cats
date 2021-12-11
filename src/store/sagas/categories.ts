import { put, takeLatest } from 'redux-saga/effects';

import { client } from '../../modules/request';
import { CATEGORY_ACTIONS, succesGetCategories, succesGetCats } from '../actions/categories';

interface ResponseGenerator {
  data?: any,
}

function* getCategories() {
  try {
    const data: ResponseGenerator = yield client.get('v1/categories');
    yield put(succesGetCategories(data.data));
  } catch (err) {
    console.log(err);
  }
}

function* getCats({payload}: any) {
  try {
    const data: ResponseGenerator = yield client.get(`v1/images/search?limit=${payload.limit}&page=1&category_ids=${payload.id}`);
    yield put(succesGetCats(data.data));
  } catch (err) {
    console.log(err);
  }
}

function* CategoriesSaga() {
  yield takeLatest(CATEGORY_ACTIONS.ATTEMPT_TO_GET_CATEGORIES, getCategories);
  yield takeLatest(CATEGORY_ACTIONS.ATTEMPT_TO_GET_CATS, getCats);
}

export default CategoriesSaga;
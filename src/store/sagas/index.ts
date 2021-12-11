import { all } from 'redux-saga/effects';

import categories from './categories';

export default function* rootSaga() {
  yield all([
    categories(),
  ]);
}
import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import { successFetchHouseMap } from '../actions/actions';
import actionTypes from '../actionTypes/actionTypes';

function* fetchData() {
  const templatesUrl = 'http://demo4452328.mockable.io/templates';
  const propsUrl = 'http://demo4452328.mockable.io/properties';

  try {
    const [templatesResponse, propsResponse] = yield all([
      call(fetch, templatesUrl),
      call(fetch, propsUrl),
    ]);

    const templates = yield templatesResponse.json();
    const props = yield propsResponse.json();

    yield put(successFetchHouseMap(templates, props));
  } catch (error) {
    throw new Error(error);
  }
}

function* sagaWatcher() {
  yield takeLatest(actionTypes.FETCH_HOUSE_MAP, fetchData);
}

export default sagaWatcher;

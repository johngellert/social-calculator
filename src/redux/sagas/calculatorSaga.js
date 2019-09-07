import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "POST_OPERATION" actions
function* postOperation(action) {
  try {
    console.log(action.payload);
    // const response = yield axios.get('/api/user', config);
    yield axios.post('/api/calculator', action.payload);


    // yield put({ type: 'SET_USER', payload: response.data });

  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* calculatorSaga() {
  yield takeLatest('POST_OPERATION', postOperation);
}

export default calculatorSaga;

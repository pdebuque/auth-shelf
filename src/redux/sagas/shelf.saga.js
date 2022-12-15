import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* shelfSaga() {
  yield takeEvery('GET_SHELF', getShelf)
  yield takeEvery('ADD_NEW_ITEM', addNewItem)
  yield takeEvery('DELETE_ITEM', deleteItem)
}

function* getShelf(action) {
  try {
    console.log('getting shelf from database')
    const shelf = yield axios.get('/api/shelf');
    console.log('shelf:', shelf)
    yield put ({type: 'SET_SHELF', payload: shelf.data})
  }
  catch(err){
    console.log('could not get shelf', err)
  }
}

function* addNewItem(action) {
  try{
    console.log('in addNewItem')
    yield axios.post('/api/shelf', action.payload);
    yield put({type: 'GET_SHELF'})
  }
  catch(err) {
    console.log('could not add item', err)
  }
}

function* deleteItem(action) {
  try{
    console.log('in deleteItem. deleting item no.', action.payload)
    yield axios.delete(`/api/shelf/${action.payload}`)
    yield put ({type: 'GET_SHELF'})
  }
  catch(err) {
    console.log('could not delete item', err)
  }
}



export default shelfSaga;
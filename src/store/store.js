import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '@myapp/features/rootSaga';
import authReducer from '@myapp/features/auth/auth.slice';

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);


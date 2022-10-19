import {configureStore} from '@reduxjs/toolkit';

import transactionReducer from '../Redux/Transactions';

export default configureStore({
  reducer: {transactionState: transactionReducer},
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      immutableCheck: false,
    });
    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }
    return middlewares;
  },
  devTools: process.env.NODE_ENV !== 'production',
});

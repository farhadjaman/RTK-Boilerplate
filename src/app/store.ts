import { configureStore } from '@reduxjs/toolkit';
import { apiReducer, apiMiddleware, apiReducerPath } from './api/apiSlice';
import authSlice from './auth/authSlice';
import conversationSlice from './conversations/conversationSlice';
import messagesSlice from './messages/messagesSlice';

export const store = configureStore({
  reducer: {
    [apiReducerPath]: apiReducer,
    auth: authSlice,
    conversations: conversationSlice,
    messages: messagesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

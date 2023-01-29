import { createSlice } from '@reduxjs/toolkit';
import { register, logOut, logIn, refreshUser } from './operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'rememberUser'],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    authError: null,
    rememberUser: false,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {
    rememberUser(state, action) {
      state.rememberUser = action.payload;
    },
    authError(state, action) {
      state.authError = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => {
        state.authError = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        console.log(action.payload);
        state.authError = action.payload;
      })
      // register

      //logIn
      .addCase(logIn.pending, (state, action) => {
        state.authError = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.authError = action.payload;
      })
      //logIn

      // logOut
      .addCase(logOut.pending, (state, action) => {})
      .addCase(logOut.fulfilled, (state, action) => {
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.authError = action.payload;
      })

      // refreshUser
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const authPresistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const { rememberUser, authError } = authSlice.actions;

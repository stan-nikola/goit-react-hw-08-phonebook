import { createSlice } from '@reduxjs/toolkit';
import { register, logOut, logIn, refreshUser } from './operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import createTransform from 'redux-persist/lib/createTransform';
// import pick from 'lodash.pick';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    authError: null,
    rememberUser: true,
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
        state.rememberUser = true;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.authError = action.payload;
      })

      // refreshUser
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.authError = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.authError = null;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'rememberUser'],
};

// const whitelistTransform = createTransform((inboundState, key) => {
//   // Select values from the route reducer
//   if ((key === 'rememberUser' || key === 'token') && inboundState) {
//     return pick(inboundState, ['token']);
//   }
// });

// const persistConfig = {
//   key: 'auth',
//   storage,
//   transforms: [whitelistTransform],
// };

export const authPresistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const { rememberUser, authError } = authSlice.actions;

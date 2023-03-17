import { createSlice } from '@reduxjs/toolkit';
import {
  fetchUsers,
  fetchAddUser,
  fetchUserById,
  fetchDeleteUser,
} from './operations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentUser: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
        state.currentUser = null;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchUserById.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUserById.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchUserById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchDeleteUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchDeleteUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== payload);
      })
      .addCase(fetchDeleteUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchAddUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAddUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(fetchAddUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;

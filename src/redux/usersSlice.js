import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchUsers,
  fetchAddUser,
  fetchUserById,
  fetchDeleteUser,
  fetchUpdateUser,
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
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.currentUser = null;
      })
      .addCase(fetchUserById.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })
      .addCase(fetchDeleteUser.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload);
        state.currentUser = null;
      })
      .addCase(fetchAddUser.fulfilled, (state, { payload }) => {
        state.currentUser = null;
        state.items.push(payload);
      })
      .addCase(fetchUpdateUser.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
        const indx = state.items.indexOf(({ id }) => id === payload.id);
        state.items.splice(indx, 1, payload);
      })
      .addMatcher(
        isAnyOf(
          fetchAddUser.pending,
          fetchDeleteUser.pending,
          fetchUserById.pending,
          fetchUpdateUser.pending,
          fetchUsers.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAddUser.fulfilled,
          fetchDeleteUser.fulfilled,
          fetchUserById.fulfilled,
          fetchUpdateUser.fulfilled,
          fetchUsers.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAddUser.rejected,
          fetchDeleteUser.rejected,
          fetchUserById.rejected,
          fetchUpdateUser.rejected,
          fetchUsers.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const usersReducer = usersSlice.reducer;

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64023309302b5d671c3586c1.mockapi.io/';

export const fetchUsers = createAsyncThunk(
  'users/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserById = createAsyncThunk(
  'users/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios(`/users/${id}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteUser = createAsyncThunk(
  'users/fetchDeleteUser',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/users/${id}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

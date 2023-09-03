import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Створюємо асинхроний thunk для отримання списку контактів з бекенду
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async function (_, { rejectWithValue }) {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Створюємо асинхроний thunk для додавання нового контакту
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async function (contact, { rejectWithValue }) {
    try {
      const { data } = await axios.post('/contacts', contact); //другим параметром передаємо об'єкт даних
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Створюємо асинхроний thunk для видалення контакту
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function (contactId, { rejectWithValue }) {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//------------------------------------------------------
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://64de4f04825d19d9bfb26efb.mockapi.io';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get('/contacts');
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/contacts', contact); //другим параметром передаємо об'єкт даних
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, thunkAPI) => {
//     try {
//       const { data } = await axios.delete(`/contacts/${contactId}`);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

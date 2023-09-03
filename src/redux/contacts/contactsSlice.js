import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

//Початкове значення стейту у contactSlice
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
//Винесемо логіку редюсерів, які обробляють pending та rejected екшени у функції, для оптимізацї коду
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

//Створюємо contactsSlice
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  //Асинхроні редюсери (extraReducers). Властивість extraReducers використовується щоб оголосити редюсери для «зовнішніх» типів екшенів, тобто тих, які не згенеровані з властивості reducers. Оскільки ці редюсери обробляють «зовнішні» екшени, для них не буде створено генератори екшенів в slice.actions, в цьому немає необхідності.
  extraReducers: {
    //Fetch contacts
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    //Add contact
    [addContact.pending]: handlePending,
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, action.payload];
      // state.items.push(action.payload); // можна також напряму пушити масив, бо спрацює ліба Immer та виконує оновлення імутабельно
    },
    [addContact.rejected]: handleRejected,

    //Delete contact
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      // state.items = state.items.filter(el => el.id !== action.payload);
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer; // Експортуємо contactsReducer у зовнішній код

//------------------------------------------------
// import { createSlice } from '@reduxjs/toolkit';
// import { addContact, fetchContacts, deleteContact } from './operations';

// const initialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,

//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.items = action.payload;
//         state.error = null;
//       })
//       .addCase(fetchContacts.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(addContact.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.items.push(action.payload);
//         state.error = null;
//       })
//       .addCase(addContact.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(deleteContact.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         const indexContact = state.items.findIndex(
//           item => item.id === action.payload.id
//         );
//         state.items.splice(indexContact, 1);
//         state.error = null;
//       })
//       .addCase(deleteContact.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const contactsReducer = contactsSlice.reducer;

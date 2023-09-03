import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from '../../hooks';
import Home from '../../pages/Home/Home';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import Contacts from '../../pages/Contacts/Contacts';
import css from './App.module.css';
import { Loader } from '../../components/Loader/Loader'

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
   <div className={css.loaderWrap}>
      <Loader /> 
      </div> 
    // <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};


//------------------------------------------------------
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
// import ContactForm from '../ContactForm/ContactForm';
// import ContactList from '../ContactList/ContactList';
// import Filter from '../Filter/Filter';
// import css from './App.module.css';

// import { selectContacts } from 'redux/contacts/selectors'

// const App = () => {
//   const dispatch = useDispatch();
//     const contacts = useSelector(selectContacts);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={css.mainContainer}>
//       <h1 className={css.headers}>Phonebook</h1>
//       <ContactForm />
//       <h2 className={css.headers}>Contacts</h2>
//         <p className={css.total}>
//         Total contacts in phonebook:
//         <span className={css.total}> {contacts.length}</span>
//         </p>
//       <Filter />
//       <ContactList />
//     </div>
//   );
// };

// export default App;




















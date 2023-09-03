import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  // Функція оновлення полів фільтру
  const handleChangeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(changeFilter(value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </label>
  );
};




//----------------------------------------------------------
// import { useSelector, useDispatch } from 'react-redux';
// import { setFilter } from 'redux/filter/filterSlice';
// import { selectFilter } from 'redux/contacts/selectors';
// import css from './Filter.module.css';

// const Filter = () => {
//   const filter = useSelector(selectFilter);
//   const dispatch = useDispatch();

//   const changeFilterHandler = e => {
//     const { value } = e.currentTarget;
//     dispatch(setFilter(value));
//   };

//   return (
//     <>
//       <label className={css.filterLabel}>
//         Find contacts by name  🔍 
//       </label>
//       <input
//         className={css.filterInput}
//         value={filter}
//         onChange={changeFilterHandler}
//         type="text"
//         name="filter"
//       />
//     </>
//   );
// }

// export default Filter;


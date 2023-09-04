import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import avatar from './hacker.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.userWrap}>
      <img className={css.avatar} src={avatar} alt='user'/>
      <p className={css.userName}>Welcome, {user.name}</p>
      <button className={css.logoutBtn} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
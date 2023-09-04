import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
      </label>
      <div className={css.inputWrap}>
        <input className={css.input} type="text" name="name" />
      </div>
      
      <label className={css.label}>
        Email
      </label>
      <div className={css.inputWrap}>
        <input className={css.input} type="email" name="email" />
      </div>

      <label className={css.label}>
        Password
      </label>
      <div className={css.inputWrap}>
        <input className={css.input} type="password" name="password" />
      </div>
      
      <button  className={css.button} type="submit">Register</button>
    </form>
  );
};
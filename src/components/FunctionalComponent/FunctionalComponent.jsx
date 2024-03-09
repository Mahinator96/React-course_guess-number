import { useEffect, useMemo, useState } from 'react';
import style from './FunctionalComponent.module.css';
import PropTypes from 'prop-types';

export const FunctionalComponent = ({ min, max }) => {
  const [userNumber, setUserNumber] = useState('');
  const [count, setCount] = useState(0);
  const [result, setResult] = useState('Результат');
  const [finish, setFinish] = useState(false);

  const randomNumber = useMemo(() => {
    setFinish(false);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, [finish]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setCount(count + 1);

    setResult(() => {
      if (!userNumber || userNumber < min || userNumber > max) {
        return `Введите число от ${min} до ${max}`;
      }

      if (userNumber > randomNumber) {
        return `${userNumber} больше загаданного числа`;
      }

      if (userNumber < randomNumber) {
        return `${userNumber} меньше загаданного числа`;
      }

      setFinish(true);
      return `Вы угадали загаданное число ${userNumber}`;
    });
  };

  const handleChange = (e) => {
    setUserNumber(e.target.value);
  };

  console.log(randomNumber);
  return (
    <div className={style.game}>
      <p className={style.result}>{result}</p>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor='user_number'>
          {`Попыток ${count}`}
        </label>
        <input
          className={style.input}
          type='number'
          id='user_number'
          value={userNumber}
          onChange={handleChange}
        />
        <button className={style.btn}>Угадать</button>
      </form>
    </div>
  );
};

FunctionalComponent.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
};

import React, { useEffect } from 'react';
import style from './Button.module.css';

export const Button = (props) => {
  useEffect(() => {
    console.log('[]useEffect - button');
    return () => {
      console.log('componentWillUnmount - button');
    };
  }, []);

  return <button className={style.container}>Угадать</button>;
};

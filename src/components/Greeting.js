import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../store/greeting/greetingReducer';

export default function Greeting() {
  const { greeting } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div>
      <h1>Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
}

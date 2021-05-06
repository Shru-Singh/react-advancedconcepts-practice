import React, { useState } from 'react';

const UseStateObject = () => {
    //const [person, setPerson] = useState({
   // name: 'peter',
    //age: 24,
    //message: 'random message',
    //});
    const [name, setName] = useState('peter');
    const [age, setAge] = useState(24);
    const [message, setMessage] = useState('random message');

    const changeMessage = () => {
     //setPerson({...person, message: 'hello world'});
     setName('Ron');
     setAge(22);
     setMessage('Hello World');
    };
  return (
    <>
  <h2>{name}</h2>
  <h2>{age}</h2>
  <h2>{message}</h2>
  <button className='btn' onClick={changeMessage}>
     change message
  </button>
  </>
  );
};

export default UseStateObject;
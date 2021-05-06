import React, { useState, useEffect } from 'react';

const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return() => {
         window.removeEventListener('resize', checkSize);
        };
    });
    console.log('render');
    return (
        <>
        <h1>window</h1>
        <h2>{size} PX</h2>
        </>
    );
};

export default UseEffectCleanup;
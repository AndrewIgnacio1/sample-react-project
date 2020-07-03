import React from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';

console.log(validator.isEmail('test@gmail.com'));

const template = <p>This is JSX from webpack</p>;
ReactDOM.render(template, document.getElementById('app'));
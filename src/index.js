import React from 'react';
import ReactDOM from 'react-dom/client';

const stringName="this is test one";
const date= new Date(); //obect created of type Date 
//which will be later used to access the Date methods
//by calling its object date
const currYear=date.getFullYear();
const currMonth=date.getMonth();
const currDay=date.getDay();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <h1>Whtass app</h1>
 <p>how is going : {stringName} </p>
 <p>here will print current year : {currYear +"-"+currMonth +"-"+currDay}</p>
 </>
);


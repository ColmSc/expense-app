import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
    <NavLink to={`/edit/${id}`}><h1>{description}</h1></NavLink>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
             -  
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);

export default ExpenseListItem;
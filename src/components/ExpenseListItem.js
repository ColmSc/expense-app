import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
    <NavLink to={`/edit/${id}`}><h1>{description}</h1></NavLink>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;
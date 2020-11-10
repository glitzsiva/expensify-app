import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItems =({description, id,amount,createdAt})=>(
    <div>

        <Link to={`/edit/${id}`}>
            <h1>{description}</h1>
        </Link>
        <h5>{amount}-{createdAt}</h5>
        
    </div>
)
export default ExpenseListItems;
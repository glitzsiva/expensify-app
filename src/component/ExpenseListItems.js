import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItems =({description, id,amount,createdAt})=>(
    <div>

        <Link to={`/edit/${id}`}>
            <h1>{description}</h1>
        </Link>
        <h5>
        {numeral(amount).format('$0,0.00')}
        -
        {moment(createdAt).format('MMMM Do,YYYY')}</h5>
        
    </div>
)
export default ExpenseListItems;
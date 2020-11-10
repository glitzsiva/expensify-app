import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../component/Header';
import NotFound from '../component/NotFound';
import HelpPage from '../component/HelpPage';
import EditExpenses from '../component/EditExpenses';
import AddExpense from '../component/AddExpenses';
import ExpenseDashboard from '../component/ExpensesDashboard';


const AppRouter=()=> (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact={true} />
                <Route path="/create" component={AddExpense}  />
                <Route path="/edit/:id" component={EditExpenses} exact={true}/>
                <Route path="/help" component={HelpPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
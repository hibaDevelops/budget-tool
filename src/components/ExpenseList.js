import React, {useContext} from 'react';
import { ExpenseTransaction } from './ExpenseTransaction';
import {GlobalContext} from '../context/GlobalState';

export const ExpenseList = () => {
    const {expenseTransactions} = useContext(GlobalContext);
    return (
        <div className="transactions transactions-expense">
            <h2>Transactions History</h2>
            <ul className="transaction-list">
                {expenseTransactions.map(expense => (
                    <ExpenseTransaction
                        key={expense.id}
                        expense={expense}
                    />
                ))}
            </ul>
        </div>
    );
}

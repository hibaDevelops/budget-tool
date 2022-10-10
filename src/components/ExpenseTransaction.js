import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const ExpenseTransaction = ({expense}) => (
    <li className="transaction">
        <span className="transaction-text">{expense.expenseText}</span>
        <span className="transaction-amount">{expense.expenseAmount}</span>
        <button className="delete-btn">
            <FontAwesomeIcon icon={faTrash} />
        </button>
    </li>
);

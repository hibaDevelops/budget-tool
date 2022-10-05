import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const ExpenseList = () => {
    return (
        <div className="transactions transactions-expense">
            <h2>Transactions History</h2>
            <ul className="transaction-list">
                <li className="transaction">
                    <span className="transaction-text">Expense</span>
                    <span className="transaction-amount">$500</span>
                    <button className="delete-btn">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </li>
            </ul>
        </div>
    );
}

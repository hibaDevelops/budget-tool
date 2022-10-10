import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {GlobalContext} from '../context/GlobalState';

export const IncomeTransaction = ({incomeTransaction}) => (
    <li className="transaction">
        <span className="transaction-text">{incomeTransaction.incomeText}</span>
        <span className="transaction-amount">{incomeTransaction.incomeAmount}</span>
        <button className="delete-btn">
            <FontAwesomeIcon icon={faTrash} />
        </button>
    </li>
);

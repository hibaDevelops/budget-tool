import React, {useState, useContext} from 'react';
import {v4 as uuidV4} from 'uuid';
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
    const {addIncome, addExpense} = useContext(GlobalContext);
    const [ income, setIncome ] = useState({
        incomeText: '',
        incomeAmount: 0
    });
    const [ expense, setExpense ] = useState({
        expenseText: '',
        expenseAmount: 0
    });

    const {incomeText, incomeAmount} = income;
    const {expenseText, expenseAmount} = expense;

    const handleIncomeChange = e => {
        setIncome({ ...income, [e.target.name]: e.target.value });
    };
    const handleExpenseChange = e => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
    };

    const onSubmitIncome = e => {
        e.preventDefault();

        const newIncomeTransaction = {
            id: uuidV4(),
            incomeText,
            incomeAmount: Number(incomeAmount)
        }

       addIncome(newIncomeTransaction);

       setIncome({
        incomeText: '',
        incomeAmount: 0
       });
    };
    const onSubmitExpense = e => {
        e.preventDefault();

        const newExpenseTransaction = {
            id: uuidV4(),
            expenseText,
            expenseAmount: Number(expenseAmount)
        }

       addExpense(newExpenseTransaction);

       setExpense({
        expenseText: '',
        expenseAmount: 0
       })
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className="input-group income">
                    <input name="incomeText" type="text" value={incomeText} placeholder="Add Income..." autoComplete="off" onChange={handleIncomeChange} />
                    <input name="incomeAmount" type="number" value={incomeAmount} placeholder="Amount" autoComplete="off" onChange={handleIncomeChange} />
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            <form onSubmit={onSubmitExpense}>
                <div className="input-group expense">
                    <input name="expenseText" type="text" value={expenseText} placeholder="Add Expense..." autoComplete="off" onChange={handleExpenseChange} />
                    <input name="expenseAmount" type="number" value={expenseAmount} placeholder="Amount" autoComplete="off" onChange={handleExpenseChange} />
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    );
}

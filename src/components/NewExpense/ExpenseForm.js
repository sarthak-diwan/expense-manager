import './ExpenseForm.css';
import { useState } from 'react';
const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeListener = (event) => {
        // console.log(event.target.value);
        setTitle(event.target.value);
    }


    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const formSubmitHandler = (event) =>{
        event.preventDefault();
        // console.log(event);
        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        };
        // console.log(expenseData);
        props.onSubmit(expenseData);
        setAmount('');
        setTitle('');
        setDate('');
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleChangeListener}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={amount} onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2021-01-01' max='2024-12-31' value={date} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onCancel}>
                    Cancel
                </button>
                <button type='submit'>
                    Add Expense
                </button>
            </div>
        </form>
    );
}

export default ExpenseForm;
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);
    const expenseFormHandler = (expenseData) => {
        const newExpense = {
            ...expenseData,
            id: Math.random().toString()
        }
        // console.log(newExpense);
        props.onNewExpense(newExpense);
        setShowForm(false);
    }
    const addNewExpHandler = () => {
        setShowForm(true);
    }
    const cancelClickHandler = () => {
        setShowForm(false);
    }
    if(!showForm){
        return (
            <div className="new-expense">
                <button onClick={addNewExpHandler}>
                    Add New Expense
                </button>
            </div>
        );
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSubmit={expenseFormHandler} onCancel={cancelClickHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;
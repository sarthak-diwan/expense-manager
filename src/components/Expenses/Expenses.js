import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
const Expenses = (props)=>{
    const [filterValue, setFilterValue] = useState('2021');
    const filterChangeListener = (value) => {
        // console.log(value);
        setFilterValue(value);
    }
    // console.log(expenses);
    const filteredExpenses = props.expenses.filter((expense)=>{return expense.date.getFullYear().toString() === filterValue});
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterValue} onChange={filterChangeListener}></ExpensesFilter>
                <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
            </Card>
        </div>
        
    );
}
export default Expenses;
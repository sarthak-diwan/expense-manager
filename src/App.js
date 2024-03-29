import logo from './logo.svg';
import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Mobile Phone',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e6',
    title: 'Study Table',
    amount: 299.99,
    date: new Date(2022, 2, 11),
  },
  {
    id: 'e7',
    title: 'Spectacles',
    amount: 10.99,
    date: new Date(2023, 1, 10),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const newExpenseHandler = (expenseData) => {
    // console.log(expenseData);
    setExpenses((prevExpenses) => {
      return ([expenseData, ...prevExpenses])
    });
  }
  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;

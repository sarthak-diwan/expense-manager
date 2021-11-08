import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
    if(props.filteredExpenses.length === 0){
        return (<h2 className="expenses-list__fallback">No expenses here!</h2>);
    }
    return (props.filteredExpenses.map((expense)=>{
            return (
                <ul className="expenses-list">
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}>
                    </ExpenseItem>
                </ul>
            )
        })
    )
}

export default ExpensesList;
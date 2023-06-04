import ExpenseItems from "./ExpenseItems";
import './ExpensesPrices.css';

const ExpensePrices=(props)=>{
    return(
        <div>
           <ExpenseItems
           title={props.expenses[0].title}
           amount={props.expenses[0].amount}
           date={props.expenses[0].date}
           />
           <ExpenseItems
           title={props.expenses[1].title}
           amount={props.expenses[1].amount}
           date={props.expenses[1].date}
           />
           <ExpenseItems
           title={props.expenses[2].title}
           amount={props.expenses[2].amount}
           date={props.expenses[2].date}
           />
           <ExpenseItems
           title={props.expenses[3].title}
           amount={props.expenses[3].amount}
           date={props.expenses[3].date}
           />
        </div>
    );
}

export default ExpensePrices;
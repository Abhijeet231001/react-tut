import React from "react";
import './ExpenseItems.css';
import ExpenseDate from "./ExpenseDate";
import ExpensePrices from "./ExpensePrices";


const ExpenseItems=(props)=>{
     return(
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <ExpensePrices/>
            </div>
        </div>
     );
}

export default ExpenseItems;
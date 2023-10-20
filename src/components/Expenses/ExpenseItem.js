import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
//import Card from "./Card";
const  ExpenseItem = (props) => {
   
    return(
        <div className="expense-item">
           <div><ExpenseDate date={props.date}/></div>
            <div className="expense-item__description">
            <h2>{props.model}</h2>
            <div className="expense-item__price">${props.price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;
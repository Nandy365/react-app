import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
//import Card from "./Card";
const  ExpenseItem = (props) => {
    let title = props.title
    const clickme = () => {
        title = "updated"
        console.log(title)
    }
   
    return(
        <div className="expense-item">
           <div><ExpenseDate date={props.date}/></div>
            <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.price}</div>
            </div>
            <button onClick={clickme} >click</button>
        </div>
    )
}

export default ExpenseItem;
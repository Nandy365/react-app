import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
function Expenses(props){

    return(
        <Card className="expenses">
        <ExpenseItem 
        model={props.items[0].model}
        price={props.items[0].price}
        date={props.items[0].date}
        ></ExpenseItem>
         <ExpenseItem 
        model={props.items[1].model}
        price={props.items[1].price}
        date={props.items[1].date}
        ></ExpenseItem>
         <ExpenseItem 
        model={props.items[2].model}
        price={props.items[2].price}
        date={props.items[2].date}
        ></ExpenseItem>
         <ExpenseItem 
        model={props.items[3].model}
        price={props.items[3].price}
        date={props.items[3].date}
        ></ExpenseItem>
      </Card> 
    )
}
export default Expenses;
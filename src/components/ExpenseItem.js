import "./ExpenseItem.css"
function ExpenseItem(){
    return(
        <div className="expense-item">
            <div>Jan 02 2022</div>
            <div className="expense-item__description">
            <h2>Car Model</h2>
            <div className="expense-item__price">$3232</div>
            </div>
        </div>
    )
}

export default ExpenseItem;
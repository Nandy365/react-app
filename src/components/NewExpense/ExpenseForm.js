import './ExpenseForm.css'
const ExpenseForm = () => {
    return(
        <form>
  <div className='new-expense__controls'>
<div className='new-expense__control'>
  <lable>Model</lable>
    <input type='text'/>
    </div>
    <div className='new-expense__control'>
  <lable>Price</lable>
    <input type='number' min="10" step="10000000"/>
    </div>
    <div className='new-expense__control'>
  <lable>Date</lable>
    <input type='date' min="2010-01-01" max="2050-01-01"/>
    </div>
    <div className='new-expense__control'>
    <button type='submit' >Submit</button>
    </div>
  </div> 
  </form>    
    )
}
export default ExpenseForm;
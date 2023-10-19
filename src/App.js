import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expense = [
    {
      model:"countach",
      price:56457,
      date :new Date(2023,2,5)
    },
    {
      model:"urus",
      price:54657,
      date:new Date(2026,1,4)
    },
    {
      model:"hurcan",
      price:55685,
      date:new Date(2026,7,24)
    },
    {
      model:"avantador",
      price:55685,
      date:new Date(2026,7,24)
    }

  ]
  return ( 
    <div>
      <ExpenseItem 
      model={expense[0].model}
      price={expense[0].price}
      date={expense[0].date}
      ></ExpenseItem>
       <ExpenseItem 
      model={expense[1].model}
      price={expense[1].price}
      date={expense[1].date}
      ></ExpenseItem>
       <ExpenseItem 
      model={expense[2].model}
      price={expense[2].price}
      date={expense[2].date}
      ></ExpenseItem>
       <ExpenseItem 
      model={expense[3].model}
      price={expense[3].price}
      date={expense[3].date}
      ></ExpenseItem>
    </div> 
  );
}
export default App;
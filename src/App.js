//import Card from "./components/Card";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses  = [
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
    <NewExpense/>
    <Expenses items={expenses}></Expenses>
   </div>
  );
}
export default App;
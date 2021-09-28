import './App.css';
import { useState } from "react";
import buttons from "./keys.json";
const math = require("mathjs"); 

const App = () =>  {
  const [total, setTotal] = useState([""])
  const [performed, setPerformed] = useState(false);
  const handleClick = (value) => {
    if (performed == true) {
      setPerformed(false)
      setTotal("");
      console.log("yep", total, performed);
    }
    if (value === "=") {
      let equation = total;
      try {
        equation = math.evaluate(equation.join(""));
        setTotal([equation]);
        setPerformed(true);
      } catch {
        setTotal("Error press AC")
      }
    } else if (value === "AC") {
      setTotal("");
    } else {
      setTotal([...total, value])
    }
  }

  return (
    <div className="top">
      <div className="main">
        <h1 className="total">{total}</h1>
        {buttons.map(item => {
          return <button className={item.class} onClick={()=> handleClick(item.value)}>{item.value}</button>
        })}
      </div>
    </div>
  
  )
}
export default App;
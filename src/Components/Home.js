import React, {useState} from 'react'
import classes from "./Home.module.css"
import Button from "./Button"

function Home() {

  const [results, setResults] = useState("")
  const buttons = ["C", "9", "/", "8", "7", "6", "*", "5", "4", "3", "+", "2", "1", "0", "-", ".", "Del", "="]

  const evaluate = ()=> {
    let result = Function("return "+results)();
    setResults(result.toString());
  }

  const handler = (arg) => {
    if(results === "Infinity"){
      setResults("");
      return;
    }
    if(arg == "C") setResults("");
    else if(arg == "=") evaluate();
    else if (arg == "Del"){
      if(results.length>0)
        setResults(results.slice(0, results.length-1));
      }
      else setResults(results.concat(arg));
  }

  return (
    <div className={classes.home}>
      <div className={classes.inner}>
        <div className={classes.results}>
          <div className={classes.resultsBox}></div>
          {results}
        </div>
      
      <div className={classes.buttons}>
        {buttons.map((ele,index)=> {return <Button handler={handler} value={ele} key={index}/>})}
      </div>
      </div>
    </div>
  )
}

export default Home
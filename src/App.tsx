import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";


export type DisabledType = {forInc: boolean, forRes: boolean};

function App() {
    const [disabled, setDisabled] = useState<DisabledType>({forInc: false, forRes: true});
    const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <header className="App-header">
       <Counter maxValue={5} initialValue={count} disabled={disabled} changeDisabled={setDisabled} setCount={setCount}/>
      </header>
    </div>
  );
}

export default App;

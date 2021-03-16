import React from 'react';
import ReactDOM from 'react-dom';
const root = document.getElementById('root')

let _state = []
let index = 0
const myUseState = initialValue => {
  const current = index
  _state[current] = _state[current] === undefined ? initialValue : _state[current]
  const setState = newValue => {
    _state[current] = newValue
    render()
  }
  index += 1
  return [_state[current], setState]
}

const render = () => {
  index = 0
  ReactDOM.render(
    <App />,
    root
  );  
}

const App = () => {
  const [n, setN] = myUseState(0)
  const [m, setM] = myUseState(0)
  return (
    <div>
      <div>
      n: {n}
       <button onClick={() => setN(n+1)}>+1</button>
       </div>
       <div>
      m: {m}
       <button onClick={() => setM(m+1)}>+1</button>
       </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  root
);


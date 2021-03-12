import React from 'react'
const App = () => {
  return (
    <div>APP 组件
      <Component numbers={['a', 'b', 'c']} />
    </div>
  )
}

const Component = (props) => {
  return (
    <div>
      {props.numbers.map((i, index) => {
        return <div key={index}>下标是{index}值为{i}</div>
      })}
    </div>
  )
}

export default App;
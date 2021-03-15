import React, {useState, useEffect} from 'react'

const App = () => {
  const [n, setN] = useState(0)
  const onClick = () => {
    setN(n+1)
  }

  const useX = (n) => {
    const [nUpdateCount, setNUpdateCount] = useState(0)
    useEffect(() => {
      setNUpdateCount(x => x +1)
    }, [n])
    return {
      nUpdateCount
    }
  }
  const {nUpdateCount} =  useX(n)
  useEffect(() => {
    if(nUpdateCount > 1){
      console.log('变了')
    }
  }, [nUpdateCount])
  return (
    <div>n: {n}
       <button onClick={onClick}>+1</button>
    </div>
  )
}

export default App;
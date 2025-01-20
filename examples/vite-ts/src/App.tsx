import { useColorMode } from "@chakra-v2/react"

function App() {
  const { toggleColorMode } = useColorMode()
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <button onClick={toggleColorMode}>Toggle</button>
      </header>
    </div>
  )
}

export default App

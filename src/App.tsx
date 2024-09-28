import './App.css'
import { Column } from './components/generic/Column'
import { Weather } from './components/primary-widgets/weather/Weather'

function App() {

  return (
    <>
      <Column>
        <Weather />
      </Column>
    </>
  )
}

export default App

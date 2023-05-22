
import './App.css'
import { Zoom } from './components/zoom'
function App() {
 
const url  ="http://10.131.48.110:8000/stream.mjpg"

  return (
    <>
 
    <Zoom url={url}></Zoom>
    </>
  )
}

export default App

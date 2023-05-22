
import { Zoom } from './components/zoom'
function App() {
 
const url  ="http://10.131.48.110:8000/stream.mjpg"

  return (
    <>
    <div><Zoom url={url}></Zoom></div>
  
    </>
  )
}

export default App

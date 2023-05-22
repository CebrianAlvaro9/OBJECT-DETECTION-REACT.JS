
import { useParams } from 'react-router-dom';
import { Zoom } from '../components/zoom'
import { useEffect, useState } from 'react';
import { useUrl } from '../hooks/useUrl.js';
import { queryCameras } from '../db/firebase-querys';
function ZoomPage() {

    const [camera, setCamera] = useState()

    const[url, setUrl] = useState("")
    useEffect(() => {
        queryCameras().then(setCamera);
      
    }, []);
   
    useEffect(() => {
        if(camera){
            setUrl(camera[0].url)
        }
      
    }, [camera]);
    console.log(url)

  return (
    <>
    <div><Zoom url={url}></Zoom></div>
  
    </>
  )
}

export default ZoomPage

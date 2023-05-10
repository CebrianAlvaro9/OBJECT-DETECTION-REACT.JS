
import { useState, useEffect } from "react";
import { cameraById } from '../db/firebase-querys';


export function useCameraId(id){

    const [camera, setCamera] = useState([]);

    //function that gets the data from the database and converts in to an array in async 
    
    useEffect(() => {
        cameraById(id).then(setCamera);

    }, [id]);

return camera
}
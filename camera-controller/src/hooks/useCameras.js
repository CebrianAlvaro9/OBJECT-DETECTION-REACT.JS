
import { useState, useEffect } from "react";

import { queryCameras } from "../db/firebase-querys";

export function useCamera(){

    const [cameras, setCameras] = useState([]);

    //function that gets the data from the database and converts in to an array in async 
    
    useEffect(() => {
        queryCameras().then(setCameras);

    }, []);

return cameras
}
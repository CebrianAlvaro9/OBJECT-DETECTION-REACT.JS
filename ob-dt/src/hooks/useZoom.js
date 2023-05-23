import { useEffect, useState } from "react";
import { queryCameras } from "../db/firebase-querys";

export function useZoom(){


    const [camera, setCamera] = useState("")
    useEffect(() => {
      queryCameras().then(setCamera)
    }, []);
    return camera
  }
  
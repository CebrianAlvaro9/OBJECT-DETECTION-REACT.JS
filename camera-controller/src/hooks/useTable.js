import { useState } from "react";
import { useCameraId } from "./useCameraId";


export function useTable(){


    const [clickEdit, setClickEdit] = useState(false);
    const [id, setId] = useState();


    const handleClick = (cameraId) => {
        setClickEdit(true)
        console.log(camera)
        setId(cameraId)
    }

    const camera = useCameraId(id)


    return [clickEdit, camera, id, handleClick]
}
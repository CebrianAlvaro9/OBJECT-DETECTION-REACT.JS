import {  useState } from "react";
import {  updateCamera } from "../db/firebase-querys";
import { db } from "../db/firebase-configuration";


export function useHome() {

    const ID ="8GiaIgVTOAt31VFS4yln"
    const [value, setValue] = useState("");

    function handleChange(event) {
        // gives the value of the targetted element
        let value = event.target.value;
        setValue(value);
        console.log(value)
     }
     const handleSubmit = (event) => {
       
        event.preventDefault();
      };
    
    const handleCameraModify = async () => {
        const cameraId = ID;
        const newData = { url: value };
        await updateCamera(db, cameraId, newData);
        console.log("nuevo " + value)

    };

    return { handleCameraModify,  handleChange, handleSubmit } 
}
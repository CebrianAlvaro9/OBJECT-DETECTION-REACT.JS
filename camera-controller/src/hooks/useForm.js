import { useEffect, useRef, useState } from "react";
import { db } from "../db/firebase-configuration";
import { updateCamera } from "../db/firebase-querys";

export function useForm(camera, id) {


    const [cameraName, setCameraName] = useState();
    const [cameraUrl, setCameraUrl] = useState();

    const [inputs, setInputs] = useState({});
    const [layoutName, setLayoutName] = useState("default");
    const [inputName, setInputName] = useState("default");
    const keyboard = useRef();



    const onChangeAll = inputs => {
        /**
         * Here we spread the inputs into a new object
         * If we modify the same object, react will not trigger a re-render
         */
        setInputs({ ...inputs });
        console.log("Inputs changed", inputs);
    };

    const handleShift = () => {
        const newLayoutName = layoutName === "default" ? "shift" : "default";
        setLayoutName(newLayoutName);
    };

    const onKeyPress = button => {
        console.log("Button pressed", button);

        /**
         * If you want to handle the shift and caps lock buttons
         */
        if (button === "{shift}" || button === "{lock}") handleShift();
    };

    const onChangeInput = event => {
        const inputVal = event.target.value;
        keyboard.current.setInput(inputVal);
        setInputs({
            ...inputs,
            [inputName]: inputVal
        });

    };


    const getInputValue = inputName => {
        if (inputName === "name") {

            return inputs[inputName] || cameraName;
        } else {

            return inputs[inputName] || cameraUrl;
        }

    };


    useEffect(() => {

        setCameraName(inputs.name)
        setCameraUrl(inputs.url)
        if (cameraName === undefined) {
            setCameraName(camera.camera)
        }

        if (cameraUrl === undefined) {
            setCameraUrl(camera.url)
        }

    }, [camera.camera, camera.url, cameraName, cameraUrl, inputs.name, inputs.url])




    const handleCameraModify = async () => {
        const cameraId = id;
        const newData = { camera: cameraName, url: cameraUrl };
        await updateCamera(db, cameraId, newData);
    };

    return [inputName, keyboard, cameraName, cameraUrl, layoutName, setInputName, onChangeAll, onKeyPress, handleCameraModify, onChangeInput, getInputValue]
}
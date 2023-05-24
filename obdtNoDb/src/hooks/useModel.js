import { useState } from "react";

export function useModel(){
    const [value, setValue] = useState("");
    const [start, setStart] = useState(true)

    function handleChange(event) {
        // gives the value of the targetted element
        let value = event.target.value;
        setValue(value);
        console.log(value)
    }

    function handleClick() {
        setStart(false);
    }

    return {handleChange, handleClick, value, start}
}
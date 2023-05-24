
import ZoomPage from "./zoomPage";
import { Form } from "../components/form";
import { useModel } from "../hooks/useModel";



export function Model() {
   
   const {handleChange, handleClick, value, start}= useModel()

    if (start) {
        return (
            <>
            <Form handleChange={handleChange} handleClick={handleClick}/>
            </>)
    } else {

        return (<>
            <ZoomPage value={value} />
        </>)
    }
}
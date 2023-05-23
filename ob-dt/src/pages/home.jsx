
import { useState } from "react";
import { CurrentUrl } from "../components/currentUrl";
import { Form } from "../components/form";


export function Home() {
    
    const [activate, setActivate] = useState(false)
    function handleClick(){
        setActivate(true)
    }
    return (
        <>
    <div className="flex w-full justify-center mt-20">
        <div className="w-full max-w-sm p-4 bg-gray-500 border border-gray-900 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-white text-center my-3 text-xl font-bold">TEST OBJECT DETECTION</h1>
            {activate?<Form/>: <CurrentUrl handleClick={handleClick}/>}
            <a  className="flex justify-center button text-white bg-gray-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" href={`/detection`}>Start</a>
      </div>
      </div>

        </>

    )
}
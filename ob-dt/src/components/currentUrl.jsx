/* eslint-disable react/prop-types */

import { useZoom } from "../hooks/useZoom";

export function CurrentUrl({handleClick}){
    const camera = useZoom()
    return(
        <>
            {camera&&<p className="text-white my-2">CURRENT-URL: {camera[0].url}</p>}
            <a onClick={handleClick} className="my-4 flex justify-center button text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">Change Url</a>
            </>
    )
}
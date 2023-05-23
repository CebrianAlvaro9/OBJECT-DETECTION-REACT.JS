/* eslint-disable react/prop-types */
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export function Zoom({ url}) {

    const [click, setClick] = useState(false)
    const [zoom, setZoom] = useState("h-screen w-screen")

    function handleClick() {
        if (click) {
            setZoom('h-screen w-screen')
            return (setClick(false))
        } else {
            setZoom('h-96 mt-10')
            return (setClick(true))
        }
    }
    return (
        <>
            {url &&
                <div >
                   
                    <div className='flex justify-center w-screen '>
                    <img crossOrigin='anonymous' id="detection"  onClick={handleClick} className={` ${zoom}`} src={url} alt="image description" />
                    </div>
                    {click && <a className='button text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' href='/'>Back</a>}

                </div>
            }
           
        </>
    )

}
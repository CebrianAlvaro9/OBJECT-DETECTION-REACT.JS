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
            setZoom('h-96 ')
            return (setClick(true))
        }
    }
    return (
        <>
            {url &&
                <div >
                    {click && <h3 className="mb-4 text-xl font-extrabold text-black dark:text-white md:text-4xl lg:text-6xl text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Object Detection</span> </h3>}
                    <div className='flex justify-center w-screen'>
                    <img id="detection"  onClick={handleClick} className={` ${zoom}`} src={url} alt="image description" />
                    </div>
                    {click && <a href='/'>Back</a>}

                </div>
            }
           
        </>
    )

}
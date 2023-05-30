/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Options } from './options';
// eslint-disable-next-line react/prop-types
export function ZoomComponent({ camera }) {

    const [click, setClick] = useState(false)
    const [zoom, setZoom] = useState("h-screen")

    function handleClick() {
        if (click) {
            setZoom('h-screen')
            return (setClick(false))
        } else {
           
            return (setClick(true))
        }
    }
    return (
        <>
            {camera &&
                <div>
                    {click && <h3 className="mb-4 text-xl font-extrabold text-black dark:text-white md:text-4xl lg:text-6xl text-center position: absolute ">{camera.camera} </h3>}
                    <img id="detection"  onClick={handleClick} className={`w-screen ${zoom}`} src={camera.url} alt="image description" />
                </div>
            }
            {click && <Options />}
        </>
    )

}
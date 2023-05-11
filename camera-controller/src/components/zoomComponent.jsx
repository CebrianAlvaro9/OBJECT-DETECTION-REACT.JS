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
            setZoom('h-96')
            return (setClick(true))
        }
    }
    return (
        <>
            {camera &&
                <div>
                    {click && <h2 className="mb-4 text-2xl font-extrabold text-white dark:text-white md:text-5xl lg:text-6xl text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Camera </span> {camera.camera}</h2>}
                    <img onClick={handleClick} className={`w-screen ${zoom}`} src={camera.url} alt="image description" />
                </div>
            }
            {click && <Options />}
        </>
    )

}
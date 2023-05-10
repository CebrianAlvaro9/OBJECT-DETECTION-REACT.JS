import { useParams } from 'react-router-dom';
import { Options } from '../components/options';
import { useCameraId } from '../hooks/useCameraId';
import { useEffect, useState } from 'react';


export default function Zoom() {
    const params = useParams();
    const [click, setClick] = useState(false)
    const camera = useCameraId(params.id)
    const [zoom, setZoom] = useState("h-screen")

    function handleClick() {
        if (click ) {
            setZoom('h-screen')
            return (setClick(false))
        } else {
            setZoom('h-96')
            return (setClick(true))
        }
    }

    return (
        <>
            <div className="bg-transparent">
                {camera &&
                    <div>
                        {click && <h1 className="mb-4 text-3xl font-extrabold text-white dark:text-white md:text-5xl lg:text-6xl text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Camera </span> {camera.camera}</h1>}

                        <img onClick={handleClick} className={`w-screen ${zoom}`} src={camera.url} alt="image description" />

                    </div>
                }

                {click && <Options />}


            </div>
        </>
    )
}
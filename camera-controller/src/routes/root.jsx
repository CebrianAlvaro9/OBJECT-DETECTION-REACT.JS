// import { useCamera } from "../hooks/useCameras";
// import { useState, useEffect } from "react";
import { useCamera } from "../hooks/useCameras";
import { Options } from "../components/options";

export default function Root() {

    //Custom hook 
    const cameras = useCamera()
    return (
        <>
        <div className="bg-transparent">
            <h1 className="mb-4 text-3xl font-extrabold text-white dark:text-white md:text-5xl lg:text-6xl text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Camera</span> Controller</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                {cameras.map((camera, index) => (
                    <div key={index} >
                        <a href="#">
                            <h5 className="p-5 mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{camera.camera}</h5>
                        </a>
                        <img className="h-auto max-w-full rounded-lg" src={camera.url} alt=""></img>
                        <div className="p-5">
                            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">.</p> */}
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Zoom
                            </a>
                        </div>
                    </div>
                ))}
            </div><Options /></div>
        </>
    );
}
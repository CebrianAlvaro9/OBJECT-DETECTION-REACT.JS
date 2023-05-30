// import { useCamera } from "../hooks/useCameras";
// import { useState, useEffect } from "react";
import { useCamera } from "../hooks/useCameras";
import { Options } from "../components/options";

export default function Root() {

    //Custom hook 
    const cameras = useCamera()
    console.log(cameras)
    return (
        <>
        <div className="bg-slate-200 h-screen">
            <h1 className="pt-8 mb-4 text-3xl font-extrabold text-slate-900 dark:text-white md:text-5xl lg:text-7xl text-center bold">CONTROLLER </h1>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-4 text-center bg-slate-200">
                {cameras.map((camera) => (
                    <div className="bg-slate-300 border-gray border rounded-lg" key={camera.camera} >
                        <a href="#">
                            <h5 className="p-5 mb-2 text-3xl font-bold tracking-tight text-black dark:text-white">{camera.camera}</h5>
                        </a>
                        <img className="h-auto max-w-full rounded-lg" src={camera.url} alt=""></img>
                        <div className="p-5 bg-slate-300">
                            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">.</p> */}
                            <a href={`/zoom/${camera.id}`} className="inline-flex items-center py-4 px-6 text-xl font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Zoom
                            </a>
                        </div>
                    </div>
                ))}
            </div><Options /></div>
        </>
    );
}
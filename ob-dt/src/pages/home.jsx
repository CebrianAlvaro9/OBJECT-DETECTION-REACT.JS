import { useEffect, useState } from "react";
import urldata from '../data.json';
import { useUrl } from "../hooks/useUrl";
import { queryCameras, updateCamera } from "../db/firebase-querys";
import { db } from "../db/firebase-configuration";

export function Home() {


    const [cameras, setCameras] = useState()

    const [url, seturl] = useState('');
    const [urlPrev, seturlPrev] = useState('');

    

    useEffect(() => {
        
        queryCameras().then(setCameras);
        if(cameras){
            seturlPrev(cameras[0].url)
        }
        
      return () => {
        
      }
    }, [cameras])

  
    function handleSubmit(e) {
        // Previene que el navegador recargue la página
        e.preventDefault();

        // Lee los datos del formulario
        const form = e.target;

        const formData = new FormData(form);

        // O puedes trabajar con él como un objecto plano:
        const formJson = Object.fromEntries(formData.entries());
        console.log("input introducido " + formJson.url)
        seturl(formJson.url)
       
    }
   
   
    const handleCameraModify = async () => {
        const cameraId = cameras[0].id;
        const newData = {  url: url };
        await updateCamera(db, cameraId, newData);
        console.log("nuevo "+ url)
        
    };
  
    return (
        <>
            <h1>Test Object detection</h1>
            <form onSubmit={handleSubmit} className="space-y-4" action="#">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">camera url</label>
                    <input placeholder={urlPrev} type="text" name="url" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>

                <button  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save changes</button>

            </form>


            <p>Url: {url}</p>

           {url&& <a onClick={handleCameraModify} className="button" type="button" href={`/detection`}>Start</a>}
        </>

    )
}
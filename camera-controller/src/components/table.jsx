import { useCamera } from "../hooks/useCameras"
import { Options } from './options';
// eslint-disable-next-line react/prop-types
export function Table({handleClick}){

    const cameras = useCamera()

    return(
        <>
        <div className="h-screen bg-slate-200 only:">
        <h2 className="pt-8 mb-10 text-2xl font-extrabold text-black dark:text-white md:text-5xl lg:text-6xl text-center">SETTINGS</h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full bg-slate-100  text-lg text-left text-gray-500 dark:text-gray-400">
            <thead className="text-3xl text-gray-900 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Camera name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Url
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {cameras.map((camera) => (
                    <tr key={camera.id} className=" bg-slate-100 border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 text-2xl text-gray-800 whitespace-nowrap dark:text-white">
                            {camera.camera}
                        </th>
                        <td className="px-6 py-4 text-2xl text-gray-800 whitespace-nowrap dark:text-white">
                            {camera.url}
                        </td>

                        <td className="px-6 py-4">
                        
                            <a  onClick={() => handleClick(camera.id)} href="#" className="inline-flex items-center py-2 px-4 text-xl font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Edit</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    <Options />
    </div>
    </>
    )
}
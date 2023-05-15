import { useCamera } from "../hooks/useCameras"
import { Options } from './options';
// eslint-disable-next-line react/prop-types
export function Table({handleClick}){

    const cameras = useCamera()

    return(
        <>
        <h2>Settings</h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Camera name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Url
                    </th>
                </tr>
            </thead>
            <tbody>
                {cameras.map((camera) => (
                    <tr key={camera.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {camera.camera}
                        </th>
                        <td className="px-6 py-4">
                            {camera.url}
                        </td>

                        <td className="px-6 py-4">
                            <a  onClick={() => handleClick(camera.id)} href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    <Options />
    </>
    )
}
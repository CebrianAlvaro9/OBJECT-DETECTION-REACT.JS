import { useHome } from "../hooks/useHome"


export function Form(){

    const { handleCameraModify,  handleChange, handleSubmit } = useHome()

    return(
        <form className="space-y-4 my-4" onSubmit={handleSubmit}>
        <div>
            <label className="block mb-2 text-sm font-medium text-white dark:text-white">Camera url</label>
            <input onChange = {handleChange} type="text" name="url" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <button onClick={handleCameraModify}  className="w-full text-white bg-gray-700 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:ring-gray-700">Save changes</button>
    </form>
    )
}
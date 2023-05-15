/* eslint-disable react/prop-types */

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { useForm } from "../hooks/useForm";

// eslint-disable-next-line react/prop-types
export function FormCo({ camera, id }) {



    const [inputName, keyboard, cameraName, cameraUrl, layoutName, setInputName, onChangeAll, onKeyPress, handleCameraModify, onChangeInput, getInputValue] = useForm(camera, id)


    return (
        <>
            <div className="flex justify-center">
                <div className="w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-4 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-4" action="#">

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Camera name</label>
                            <input value={getInputValue("name")}
                                onFocus={() => setInputName("name")}
                                placeholder={cameraName}
                                onChange={onChangeInput} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">camera url</label>
                            <input value={getInputValue("url")}
                                onFocus={() => setInputName("url")}
                                placeholder={cameraUrl}
                                onChange={onChangeInput} type="text" name="url" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>

                        <button onClick={handleCameraModify} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save changes</button>

                    </form>
                </div>
            </div>
            <Keyboard
                keyboardRef={r => (keyboard.current = r)}
                inputName={inputName}
                layoutName={layoutName}
                onChangeAll={onChangeAll}
                onKeyPress={onKeyPress}
            />
        </>

    )
}
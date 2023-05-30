/* eslint-disable react/prop-types */

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { useForm } from "../hooks/useForm";

// eslint-disable-next-line react/prop-types
export function FormCo({ camera, id}) {



    const [inputName, keyboard, cameraName, cameraUrl, layoutName, setInputName, onChangeAll, onKeyPress, handleCameraModify, onChangeInput, getInputValue] = useForm(camera, id)


    return (
        <>

            <div className="flex justify-center  pt-20  bg-slate-200 h-screen">
                <div className="grid grid-rows-2 grid-flow-col gap-4 w-screen bg-slate-200">
                    <div className="row-span-3. flex justify-center w-screen bg-slate-200">
                        <div className="w-full max-w-sm px-6 py-16 bg-slate-300 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                            <form className="space-y-4 bg-slate-300 " action="/settings">
                                       
                                <div className="bg-slate-300">
                                    <label className="bg-slate-300 font-bold block pb-2 text-xl text-gray-900 dark:text-white">Camera name</label>
                                    <input value={getInputValue("name")}
                                        onFocus={() => setInputName("name")}
                                        placeholder={cameraName}
                                        onChange={onChangeInput} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <div className="bg-slate-300">
                                    <label className="bg-slate-300 font-bold block pb-2 text-xl  text-gray-900 dark:text-white">Camera url</label>
                                    <input value={getInputValue("url")}
                                        onFocus={() => setInputName("url")}
                                        placeholder={cameraUrl}
                                        onChange={onChangeInput} type="text" name="url" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>

                                <a onClick={handleCameraModify} type="button" className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Save changes</a>
                                
                            </form>
                        </div>
                        </div>
                    <div className="col-span-2 px-40 bg-slate-200">
                        <Keyboard
                            keyboardRef={r => (keyboard.current = r)}
                            inputName={inputName}
                            layoutName={layoutName}
                            onChangeAll={onChangeAll}
                            onKeyPress={onKeyPress}
                        /></div>

                </div>




            </div>
        </>

    )
}
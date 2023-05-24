
// eslint-disable-next-line react/prop-types
export function Form({handleChange, handleClick}){
  
    
    return(
     <div className="flex w-full justify-center mt-20">
     <div className="w-full max-w-sm p-4 bg-gray-500 border border-gray-900 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
         <h1 className="text-white text-center my-3 text-xl font-bold">TEST OBJECT DETECTION</h1>
         <form className="space-y-4 my-4" >
             <div>
                 <label className="block mb-2 text-sm font-medium text-white dark:text-white">Camera url</label>
                 <input onChange={handleChange} type="text" name="url" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
             </div>
         </form>
         <a onClick={handleClick} className="flex justify-center button text-white bg-gray-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" >Start</a>
     </div>
 </div>
    )
   
 
 }

 //just save the input u ara entering and redirecting to the object detection
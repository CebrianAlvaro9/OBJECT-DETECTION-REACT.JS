import image from "../assets/img/od.png"

export function Prueba(){

    return (
        <div className=" justify-center bg-slate-300 h-screen w-screen">
          <div className=' bg-slate-300 '>
          <h2 className="pt-36 text-2xl  font-extrabold text-black dark:text-white md:text-4xl lg:text-6xl text-center">Loading...</h2>
          <p className="pt-10 pb-10 text-lg   text-black dark:text-white md:text-4xl lg:text-3xl text-center">The Object detection modules from TensorFlow.js are being loaded in the browser</p>
          <div className="w-screen  flex justify-center bg-slate-300 ">
          <img className="" src={image} alt="" />
          </div>
          
          </div>
        </div>
    )
}
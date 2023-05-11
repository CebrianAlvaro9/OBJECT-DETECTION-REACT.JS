
import { useState, useEffect } from "react";



export function useAuto( cameras){

    const [numero, setNumero] = useState(0)
    const [auto, setAuto] = useState(true)
    useEffect(() => {
        let interval;
        if(auto){
      
          interval = setInterval(() => {
            setNumero((prevnumero) => (prevnumero + 1) % cameras.length);
          }, 5000);
      }
    
        return () => clearInterval(interval);
      }, [auto, cameras.length]);



      function handleClick(){
        if(auto){
            setAuto(false)
            console.log("pausado")
        }else{
            setAuto(true)
            console.log("denuevo encendido")
        }
  }
  
return [ numero, handleClick]
}
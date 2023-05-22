import { useState } from "react";

export function useUrl(){
    
    const [url, seturl] = useState('');

    function handleSubmit(e) {
        // Previene que el navegador recargue la página
        e.preventDefault();

        // Lee los datos del formulario
        const form = e.target;
   

        const formData = new FormData(form);
       
        // O puedes trabajar con él como un objecto plano:
        const formJson = Object.fromEntries(formData.entries());
        console.log("input introducido "+formJson.url)
        seturl(formJson.url)

      
       
       
    }

    return [ url,handleSubmit];
}

import { useState, useEffect } from "react";



export function useOption(location) {


    const [col, setCol] = useState("3")

    const options = [
        { name: 'Home', url: '/' },
        { name: 'Auto', url: '/auto' },
        { name: 'Detect', url: '/detect' },
        { name: 'settings', url: '/settings' },
    ];


    const isFound = options.some(element => {
        if (element.url === location.pathname) {
            return true;
        } else {
            return false;
        }
    });

    useEffect(() => {
        if (isFound) {
            setCol("grid-cols-3")
        } else {
            setCol("grid-cols-4")
        }
        return () => {
        }
    }, [isFound])


    return [col, options]
}
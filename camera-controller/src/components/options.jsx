/* eslint-disable react-hooks/exhaustive-deps */

import { useLocation } from 'react-router-dom'
import { useOption } from '../hooks/useOptions';

export function Options() {

    const location = useLocation();
    const [col, options] = useOption(location);

    console.log(col);
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-transparent  dark:bg-gray-700 dark:border-gray-600">
          
            <div className={`grid h-full max-w-lg ${col} mx-auto font-medium bg-transparent`}>
                {options.map((option, index) => (
                    location.pathname != option.url &&
                    <a key={index} href={`${option.url}`} type="button" className=" mr-1 inline-flex border flex-col items-center justify-center px-6 bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 group">
                        <span className="text-2xl text-white dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-500">{option.name}</span>
                    </a>

                ))}
            </div>
        </div>
    )
}
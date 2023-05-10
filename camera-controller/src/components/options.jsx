export function Options() {
    const options = ["Home", "Auto", "Detect", "Settings"];
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-transparent  dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                {options.map((option, index) => (
                    <a key={index} href={`/`}  type="button" className="bg-gray-500 rounded mr-1 inline-flex border flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <span className="text-lg text-white dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{option}</span>
                    </a>
                ))}
            </div>
        </div>
    )
}
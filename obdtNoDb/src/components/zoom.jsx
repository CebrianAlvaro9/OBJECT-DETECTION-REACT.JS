/* eslint-disable react/prop-types */
export function Zoom({ value }) {
    return (
        <>
            <div >
                <div className='flex justify-center w-screen '>
                    <img crossOrigin='anonymous' id="detection" className="h-screen w-screen" src={value} alt="image description" />
                </div>
            </div>
        </>
    )

}

//important to have he crossOrigin= 'anonymous'
import { useParams } from 'react-router-dom';

import { useCameraId } from '../hooks/useCameraId';

import { ZoomComponent } from '../components/zoomComponent';


export default function Zoom() {

    const params = useParams();
    const camera = useCameraId(params.id)

    return (
        <>
            <div className="bg-transparent">
             <ZoomComponent camera ={camera}/>
            </div>
        </>
    )
}
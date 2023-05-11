import { ZoomComponent } from "../components/zoomComponent";
import { useCamera } from "../hooks/useCameras";
import { useAuto } from "../hooks/useAuto";

export default function Auto() {

    const cameras = useCamera()
    const [numero, handleClick] = useAuto(cameras)
    return (
        <>
            <div onClick={handleClick} className="bg-transparent">
                < ZoomComponent camera={cameras[numero]} />
            </div>
        </>

    )
}
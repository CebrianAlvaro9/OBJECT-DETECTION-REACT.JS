//function that parse the info from the database into an array
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore/lite';
import { db } from "../db/firebase-configuration";

export async function queryCameras() {
    const camerasCol = collection(db, 'cameras');
    const camerasSnapshot = await getDocs(camerasCol);
    const camerasList = camerasSnapshot.docs.map(doc => {

        //adding the id in order to can update 
        return {
            id: doc.id,
            ...doc.data()
        };
    });
    return camerasList;
}
//function to update de cameras from the data base
export async function updateCamera(db, cameraId, newData) {
    const cameraRef = doc(db, 'cameras', cameraId);
    await updateDoc(cameraRef, newData);
}

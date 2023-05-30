//npm i @tensorflow-models/coco-ssd
//version 2.5 !!!
//npm i @tensorflow/tfjs-backend-cpu --force
//npm i @tensorflow/tfjs-node --force
//npm i @tensorflow/tfjs-node-gpu --force

import { useEffect, useState } from "react"

import('@tensorflow/tfjs-backend-cpu');
// import('@tensorflow/tfjs-backend-webgl');
import('coral-tflite-delegate')
import * as cocoSsd from '@tensorflow-models/coco-ssd';


export function useDetection(){

    const [model, setModel] = useState(null);
    const [modelLoaded, setModelLoaded] = useState(false);
    const [predictions, setPredictions] = useState([]);
    
    
    //LOAD TENSORFLOWS MODULES
    useEffect(() => {
        cocoSsd.load().then((loadedModel) => {
          console.log("modulos loading")
            setModel(loadedModel);
            setModelLoaded(true);
            if (loadedModel) { 
              console.log("models loaded successfully"); }
        });
    }, []);
    
    
    useEffect(() => {
      function predictWebcam() {
        if (modelLoaded) {
        
          const video = document.getElementById("detection");
          model.detect(video).then((newPredictions) => {
            setPredictions(newPredictions);
          });
        }
        //call the function back when the modules are loaded
        window.requestAnimationFrame(predictWebcam);
      }
      //starts making predictions
      predictWebcam();
    }, [model, modelLoaded]);
  
    return {predictions, modelLoaded}
  }
  
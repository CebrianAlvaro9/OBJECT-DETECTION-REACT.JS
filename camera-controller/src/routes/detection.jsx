
import React from 'react';
import('@tensorflow/tfjs-backend-cpu');
import('@tensorflow/tfjs-backend-webgl');

import { useCameraId } from "../hooks/useCameraId"
import { useState, useEffect } from "react";
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import { ZoomDetection } from '../components/zoomDetection';



export function Detection() {

    const ID = "eFAy2nvVMdGbMHi2LhTq"
    const camera = useCameraId(ID)
    
   
    const [model, setModel] = useState(null);
    const [modelLoaded, setModelLoaded] = useState(false);
    const [predictions, setPredictions] = useState([]);

    console.log(modelLoaded);


    //LOAD TENSORFLOWS MODULES

    useEffect(() => {
        cocoSsd.load().then((loadedModel) => {
            setModel(loadedModel);
            setModelLoaded(true);
            if (loadedModel) { console.log("models loaded successfully"); }
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
    
      // Renderize predictions as elements from the DOM
      const predictionElements = predictions.map((prediction) => {
        // _If there is a 66% of accuracy the progrmas shows predictions on the display
        if (prediction.score > 0.66) {
          const style = {
            marginLeft: prediction.bbox[0] + "px",
            marginTop: prediction.bbox[1] - 10 + "px",
            width: prediction.bbox[4] - 10 + "px",
            top: "0",
            left: "0",
          };
          return (
            <React.Fragment key={prediction.class}>
              <p className="camView" style={style}>
                {prediction.class} - with {Math.round(parseFloat(prediction.score) * 100)}% accuracy
              </p>
              <div
                className="highlighter zoom text-white"
                style={{
                  left: prediction.bbox[0] + "px",
                  top: prediction.bbox[1] + "px",
                  width: prediction.bbox[2] + "px",
                  height: prediction.bbox[3] + "px",
                }}
              ></div>
            </React.Fragment>
          );
        }
        return null;
      });

    if (modelLoaded) {
        return (
            <>
                <div className="bg-transparent">
                <React.Fragment></React.Fragment>
                    <ZoomDetection  camera={camera} />
                    {predictionElements}
                </div>
            </>
        )
    } else {
        return (

            <div className="container justify-center">
                <h2 className="mb-4 text-xl font-extrabold text-black dark:text-white md:text-4xl lg:text-6xl text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Loading Object Detection</span> </h2>
                <div className="flex items-center justify-center mt-12 " role="status">
                    <svg aria-hidden="true" className="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>

        )
    }
}

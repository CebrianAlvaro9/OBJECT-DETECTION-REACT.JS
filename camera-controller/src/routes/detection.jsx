
import React from 'react';
import('@tensorflow/tfjs-backend-cpu');
import('@tensorflow/tfjs-backend-webgl');

import { useCameraId } from "../hooks/useCameraId"
import { useState, useEffect } from "react";
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import { ZoomDetection } from '../components/zoomDetection';
import { Prueba } from '../components/prueba';

export function Detection() {

    const ID = "eFAy2nvVMdGbMHi2LhTq"
    const camera = useCameraId(ID)
    
   
    const [model, setModel] = useState(null);
    const [modelLoaded, setModelLoaded] = useState(false);
    const [predictions, setPredictions] = useState([]);

   
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
                 <ZoomDetection camera={camera} />
                  {predictionElements}
              </div>
            </>
       )
    } else {
        return (
            <Prueba></Prueba>
        )
     }
}



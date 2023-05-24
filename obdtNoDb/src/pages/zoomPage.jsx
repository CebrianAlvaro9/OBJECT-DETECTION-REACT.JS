/* eslint-disable react/prop-types */


import { Zoom } from '../components/zoom'

import React from 'react';
import { useDetection } from '../hooks/useDetection';



function ZoomPage({value}) {

  const { predictions, modelLoaded } = useDetection()
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
  })
 

  if (modelLoaded) {
    return (
      <>
        {value && <div><Zoom value={value}></Zoom></div>}
        {predictionElements}
      </>
    )
  } else {
    return (
      <div className="flex w-full justify-center">
        <div className='h-screen w-screen  bg-gray-700'><h1 className='text-white p-20 text-3xl'>LOADING...</h1></div>
        
      </div>
    )
  }

}
export default ZoomPage

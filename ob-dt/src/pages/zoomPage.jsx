

import { Zoom } from '../components/zoom'
import { useZoom } from '../hooks/useZoom'
import React from 'react';
import { useDetection } from '../hooks/useDetection';


function ZoomPage() {

  const camera = useZoom()

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

  });



  if (modelLoaded) {
    return (
      <>
        {camera && <div><Zoom url={camera[0].url}></Zoom></div>}
        {predictionElements}
      </>
    )
  } else {

    return (
      <h1>Model loading</h1>
    )
  }

}
export default ZoomPage

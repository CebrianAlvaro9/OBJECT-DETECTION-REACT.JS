#  OBJEC-DTECTION USING TENSORFLOW IN REACT.JS
This three projects are developed to test the tensorflow.js using React.js for ccpilot-v700 and ccpilot-v1200
## Tech use for the projects



- [node.js] - evented I/O for the backend
- [React.js] - javascript framework
- [FireBase] - Real time google database
- [TensorFlow.js] - library for machine learning
- [Vite] - Next Generation Frontend Tooling
-  [Tailwindcss] - css framework library
-  [Coco-ssd] - object detection model


## Camera-controller
This projects is developed for controlling 3 different cameras which are streaming with a server

##### Functions
- Preview of the 3 cameras at the same time
- Zoom one camera
- Make object detections with tensorflow models 
- Automatic mode which pass a camera every 5 seconds
- Configuration: update camera url using firebase
- Integration of a keyboard on the screen


## OB-DT 

This project is a symple form where you introduce the url where you are going to use the object detection.
This url will be saved in the Firebase database and will start making predictions.

## OB-DT- no db

The same project as before but deleting the database for a simple use just introduces the url and start making predictions

## installation
This will install all the dependencies for the project. 
```sh
npm i
```
This will create a directory with the code in production mode and serve ir in your network in order to try it 
```
npm run build
npm serve -s dist
```
if you do not have serve firt install
```
npm i serve
```


   [vite]: <https://vitejs.dev/>
   [TensorFlow.js]: <https://www.tensorflow.org/js>
   [Tailwindcss]: <https://tailwindcss.com/t>
   [Coco-ssd]: <https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd>
   [node.js]: <http://nodejs.org>
   [React.js]: <https://react.dev/>
   [FireBase]: <hhttps://firebase.google.com/>

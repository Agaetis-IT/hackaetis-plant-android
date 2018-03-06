import { TfObjectDetection } from 'react-native-tensorflow'
import { TfImageRecognition } from 'react-native-tensorflow';

export async function imageClassifier() {
  // const tfObjectDetection = new TfObjectDetection({
  //   model: require('../training/frozen_inference_graph.pb'),
  //   labels: require('../training/pet_label_map.txt'),
  // })
  //
  // const results = await tfObjectDetection.detect({
  //   image: require('../images/test1.jpg'),
  // })
  //
  // results.forEach(result => console.tron.log(result))
  //

  const tfImageRecognition = new TfImageRecognition({
    model: require('../training/tensorflow_inception_graph.pb'),
    labels: require('../training/tensorflow_labels.txt'),
    // imageMean: 117, // Optional, defaults to 117
    // imageStd: 1 // Optional, defaults to 1
  })

  const results = await tfImageRecognition.recognize({
    image: require('../images/dumbbell.jpg'),
    // inputName: 'input', //Optional, defaults to "input"
    // inputSize: 224, //Optional, defaults to 224
    // outputName: "output", //Optional, defaults to "output"
    // maxResults: 3, //Optional, defaults to 3
    // threshold: 0.1, //Optional, defaults to 0.1
  })

  results.forEach(result => {
    console.tron.log(result.id) // Id of the result
    console.tron.log(result.name) // Name of the result
    console.tron.log(result.confidence) // Confidence value between 0 - 1
  })
}

import { TensorFlow } from "react-native-tensorflow";
import graph from "../training/frozen_inference_graph.pb";

export async function imageclassifier() {
  const tf = new TensorFlow(graph);
  await tf.feed({
    data: [1, 2, 3],
    dtype: "int64",
    name: "inputName",
    shape: [1, 2, 4]
  });
  await tf.run(["outputNames"]);
  const output = await tf.fetch("outputName");
  console.log(output);
}

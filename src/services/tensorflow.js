import { TensorFlow } from 'react-native-tensorflow'
import graph from '../training/pokemon.pb'

export async function imageclassifier() {
  console.tron.log('start')
  const tf = new TensorFlow(graph)
  console.tron.log('start')
  await tf.feed({
    data: [1, 2, 3],
    dtype: 'int64',
    name: 'inputName',
    shape: [1, 3],
  })
  console.tron.log('start')
  await tf.run(['outputNames'])
  console.tron.log('start')
  const output = await tf.fetch('outputName')
  // eslint-disable-next-line no-console
  console.tron.log(output)
}

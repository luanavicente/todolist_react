import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'
import reactotronSaga from 'reactotron-redux-saga'

export interface PluginConfig {
  except?: string[]
}

const conf: PluginConfig = {}

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga(conf))
    .connect()

  tron.clear && tron.clear()

  console.tron = tron
}

declare global {
  interface Console {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tron: any
  }
}
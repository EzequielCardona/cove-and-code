import { Provider } from 'react-redux'
import Header from './features/header/Header'
import Background from './features/layout/Background'
import { store } from './redux/store'

function App () {
  return (
    <Provider store={store}>
      <Background>
        <Header />
      </Background>
    </Provider>
  )
}

export default App

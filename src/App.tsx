import { Provider } from 'react-redux'
import store from './store/store'
import Home from './pages/Home.tsx'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  )
}

export default App

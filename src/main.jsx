import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyApp from './reduxImp/MyApp.jsx'
import { store } from './redux/store.jsx'
import { toolKitStore } from './reduxtoolkit/store.jsx'
import { Provider } from 'react-redux'
import MyToolKitApp from './reduxToolKitImp/MyToolKitApp.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={toolKitStore}>
    <MyToolKitApp />
  </Provider>
)

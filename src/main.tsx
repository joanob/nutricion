import React, {useReducer} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import Context from "./context"
import initialState from './store/initialState'
import reducer from './store/reducer'

const ContextWrapper = ({children}:{children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{state, dispatch}}>
        {children}
    </Context.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </React.StrictMode>
)
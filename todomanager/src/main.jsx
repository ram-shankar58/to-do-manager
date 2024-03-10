import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const DATA= [{id: "todo0", name:"Eat",completed:true}, {id:"todo1", name:"Sleep", completed:false},{id:"todo2",name:"Repeat",completed:false},];


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App subject="Clarice"/>
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>
)

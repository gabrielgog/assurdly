import React from "react"
import { BrowserRouter} from 'react-router-dom';

import ReactDOM from "react-dom"
import Header from "./components/header"
import App from "./app"

ReactDOM.render(

<div>
  <BrowserRouter>
  <Header />

  

  <App />




  
  </BrowserRouter>


</div>,
  

  document.getElementById("root")
)
import React from 'react';
import './styles/App.css'
import {RouterProvider} from "react-router-dom";
import {Root} from "./routes/root";

function App() {
  return (
<RouterProvider router={Root}/>
  );
}
export default App;

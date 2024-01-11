import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'
import Counter from './Counter.jsx'

// react-component=>special type of Js function which return html
//* name should be started with capital letter
//* extension jsx(javascript xml)

function App() {
  return(
    <div>
      <h3>Welcome To React</h3>
      <Card/>
      <Counter/>
    </div>
  );
}

export default App;

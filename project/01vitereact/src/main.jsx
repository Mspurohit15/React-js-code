import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1> Custom App | !</h1>
    </div>
  )
}

// const reactElement= {
//   type:'a',
//   'props':{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'click me to visit google'
// }

const anotherElement =(
  <a href='https://google.com' target='_blank'>Visit google </a>
)

const anotherUser="Naresh Purohit ";

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

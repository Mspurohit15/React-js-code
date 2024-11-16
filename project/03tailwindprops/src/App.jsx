
import './App.css'
import Card from './components/Card.jsx';

function App() {
  
  let myObj={
    username: "Naresh",
    age:21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TailWind test </h1>
      <Card userName="Naresh Purohit" btnText="Click me "/>
      <Card userName="Mahi Purohit" btnText="Visit me "/>
    </>
  )
}

export default App

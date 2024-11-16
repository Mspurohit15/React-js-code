import { useState } from "react"
import ColorButton from './ColorButton';


function App() {

  const colors = [
    { name: "Red", value: "red" },
    { name: "Green", value: "green" },
    { name: "Blue", value: "blue" },
    { name: "Olive", value: "olive" },
    { name: "Gray", value: "gray" },
    { name: "Yellow", value: "yellow" },
    { name: "Pink", value: "pink" },
    { name: "Purple", value: "purple" },
    { name: "Lavender", value: "lavender" },
    { name: "White", value: "white" },
    { name: "Black", value: "black" }
  ];

  const [color, setColor]= useState("olive");

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}
   
   >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3
      bg-white shadow-lg px-2 py-2 rounded-3xl">
        
        {colors.map((c) => (
            <ColorButton key={c.value} color={c} onClick={setColor} />
        ))}


        {/* <button 
         onClick={()=> setColor("Green")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
         style={{backgroundColor: "Green"}}
        >Green</button>
        <button 
         onClick={()=> setColor("Blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
         style={{backgroundColor: "Blue"}}
        >Blue</button>
        <button 
         onClick={()=> setColor("Olive")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
         style={{backgroundColor: "Olive"}}
        >Olive</button>
                <button 
         onClick={()=> setColor("Gray")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
         style={{backgroundColor: "Gray"}}
        >Gray</button>
                <button 
         onClick={()=> setColor("Yellow")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
         style={{backgroundColor: "Yellow"}}
        >Yellow</button>
                <button 
         onClick={()=> setColor("Pink")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
         style={{backgroundColor: "Pink"}}
        >Pink</button>
                        <button 
         onClick={()=> setColor("Purple")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
         style={{backgroundColor: "Purple"}}
        >Purple</button>
                        <button 
         onClick={()=> setColor("Lavender")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
         style={{backgroundColor: "Lavender"}}
        >Lavender</button>
                        <button 
         onClick={()=> setColor("White")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
         style={{backgroundColor: "White"}}
        >White</button>

        <button
         onClick={()=> setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
         style={{backgroundColor: "black"}}
        >Black</button> */}
      </div>
    </div>

   </div>
  )
}

export default App

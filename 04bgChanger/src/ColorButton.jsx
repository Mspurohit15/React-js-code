import React from 'react'

export function ColorButton({ color, onClick }) {
    
    return (
        <button
        onClick={() => onClick(color.value)}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: color.value }}
      >
        {color.name} </button>
    )
}

export default ColorButton;
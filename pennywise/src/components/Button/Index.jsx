import React from 'react'
import "./styles.css"

export default function Button({text, onClick, blue, disabled}) {
  return (
   <div disabled={disabled} className={blue ? 'btn btn-blue' : 'btn'} onClick={onClick} style={{cursor: disabled ? "not-allowed" : "pointer"}}>{text}</div>
  )
}

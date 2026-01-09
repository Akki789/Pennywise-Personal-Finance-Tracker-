import React, { useState } from "react";
import "./styles.css";

export default function Input({ label, state, setState, placeholder }) {
  // const [first, setfirst] = useState(second)
  return (
    <div className="input-wrapper">
      <p className="label-input">{label}</p>
      <input
        // type="text"
        placeholder={placeholder}
        className="custom-input"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
}

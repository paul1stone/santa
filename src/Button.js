import './Button.css'
import { useState } from 'react';
function Button() {
  const [dest, updateDest] = useState("index")
  function goTo() {
    window.location.href = dest;
  }
  const update = (newDest) => {
    updateDest(newDest)
  };
  return (
    <div className='holder'>
      <p className='cool-font-small'>Click me</p>
      <button onClick={goTo} className='button'>

      </button>
    </div>

  );
}

export default Button;

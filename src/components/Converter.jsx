import { useState, useRef } from 'react'
import Check from './Check';

const Converter = () => {
  const [stateValue, setStateValue] = useState({
    color: '',
  });
  const containerRef = useRef();

  const handleChange = (event) => {
    const {value} = event.target;
    console.log(event.target.value);
        setStateValue((prevStateValue) => ({...prevStateValue, color: value}))
  }

  return (
    <div className='container' ref={containerRef}>Converter
      <input 
        className='color-info hex' 
        placeholder='Введите цвет в формате HEX' 
        value={stateValue.color} 
        onChange={handleChange}/>
      <div className='color-info rgb'><Check value={stateValue.color} refElement={containerRef.current}/></div>
    </div>
  )
}

export default Converter
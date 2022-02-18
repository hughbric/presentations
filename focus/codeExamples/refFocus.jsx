import { useRef } from 'react';

export default function Page() {
  const inputElement = useRef(null);

  const handleClick = () => {
    inputElement.current.focus()
  };

  return (
    <>
      <input ref={inputElement}></input>
      <button onClick={handleClick}>Focus input</button>
    </>
  )
}

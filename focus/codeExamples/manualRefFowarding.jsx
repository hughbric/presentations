import { createRef } from 'react';

function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

export default function Parent() {
  const childInputRef = createRef();

  const handleClick = () => {
    childInputRef.current.focus()
  };

  return (
    <>
      <CustomTextInput
        inputRef={childInputRef}
      />
      <button onClick={handleClick}>Focus input</button>
    </>
  );
}

// prop name `inputRef` can be called anything

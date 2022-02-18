function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

function Parent() {
  let childInputRef = null;

  const handleClick = () => {
    if (childInputRef) {
      childInputRef.focus()
    }
  };

  return (
    <>
      <CustomTextInput
        inputRef={el => childInputRef = el}
      />
      <button onClick={handleClick}>Focus input</button>
    </>
  );
}








// caveat
const callbackRef = useCallback(inputElement => {
  if (inputElement) {
    inputElement.focus()
  }
}, []);

// useCallback returns a memoized callback.

// Pass an inline callback and an array of dependencies. useCallback will return a memoized
// version of the callback that only changes if one of the dependencies has changed. This is
// useful when passing callbacks to optimized child components that rely on reference equality
// to prevent unnecessary renders

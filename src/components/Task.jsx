import { useRef } from 'react';

function Task() {
  const inputRef = useRef('');

  const addText = (text) => {
    inputRef.current += text.target.value;
    console.log(inputRef);
  };

  const removeText = () => {
    inputRef.current = '';
    console.log(inputRef);
  };

  return (
    <div>
      <input type="text" onChange={addText} /> <br />
      <br />
      <button onClick={removeText}>Clear</button>
    </div>
  );
}

export default Task;

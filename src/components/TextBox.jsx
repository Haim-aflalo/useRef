function TextBox(props) {
  const flag = false;
  return (
    <div>
      <p>{flag && props.value}</p>
      <button onClick={(flag = true)}>Show-Value</button>
    </div>
  );
}

export default TextBox;

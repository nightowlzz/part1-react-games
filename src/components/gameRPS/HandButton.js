import HandImage from "./HandImage";

function HandButton({ value = "rock", onClick }) {
  const handleClick = () => onClick(value);
  return (
    <button className="HandButton" onClick={handleClick}>
      <HandImage value={value} />
    </button>
  );
}

export default HandButton;

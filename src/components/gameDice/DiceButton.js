export default function DiceButton({ color, onclick, children }) {
  const className = `Button App-button ${color}`;
  const HandlerBtnProps = () => onclick();

  return (
    <button className={className} onClick={HandlerBtnProps}>
      {children}
    </button>
  );
}

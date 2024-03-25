import diceBlue01 from "../../assets/gameDise/dice-blue-1.svg";
import diceBlue02 from "../../assets/gameDise/dice-blue-2.svg";
import diceBlue03 from "../../assets/gameDise/dice-blue-3.svg";
import diceBlue04 from "../../assets/gameDise/dice-blue-4.svg";
import diceBlue05 from "../../assets/gameDise/dice-blue-5.svg";
import diceBlue06 from "../../assets/gameDise/dice-blue-6.svg";
import diceRed01 from "../../assets/gameDise/dice-red-1.svg";
import diceRed02 from "../../assets/gameDise/dice-red-2.svg";
import diceRed03 from "../../assets/gameDise/dice-red-3.svg";
import diceRed04 from "../../assets/gameDise/dice-red-4.svg";
import diceRed05 from "../../assets/gameDise/dice-red-5.svg";
import diceRed06 from "../../assets/gameDise/dice-red-6.svg";

export const DICE_IMAGES = {
  blue: [
    diceBlue01,
    diceBlue02,
    diceBlue03,
    diceBlue04,
    diceBlue05,
    diceBlue06,
  ],
  red: [diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06],
};

function DiceImage({ number = 1, color }) {
  const className = `${DICE_IMAGES[color][number - 1]}`;
  const alt = `${color}-dise`;

  return <img className="Dice" src={className} alt={alt} />;
}

export default function DiceBoard({ winner, number, color, list, score }) {
  return (
    <div className="Board App-board">
      <p className="Board-heading">{winner}</p>
      <h2 className="Board-heading">나</h2>
      <DiceImage number={number} color={color} />
      <h3 className="Board-heading">기록</h3>
      <p>{list}</p>
      <h3 className="Board-heading">이긴 총점</h3>
      <p>{score}</p>
    </div>
  );
}

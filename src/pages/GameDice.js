import { useState } from "react";
import "../styles/pages/dice.css";
import logo from "../assets/gameDise/logo.png";
import DiceButton from "../components/gameDice/DiceButton";
import DiceBoard from "../components/gameDice/DiceBoard";

const INITIAL_NUMBER = 0;

function GameDice() {
  const [myDice, setMyDice] = useState(INITIAL_NUMBER + 1);
  const [youDice, setYouDice] = useState(INITIAL_NUMBER + 1);

  const [myWinList, setMyWinList] = useState([]);
  const [youWinList, setYouWinList] = useState([]);

  const [myScore, setMyScore] = useState(INITIAL_NUMBER);
  const [youScore, setYouScore] = useState(INITIAL_NUMBER);

  const gameWinner = (fir, sec) => {
    if (fir > sec) return "WIN";
    if (fir < sec) return "LOST";
    return "무승부";
  };

  const diceRandonNumber = () => {
    const myNumber = Math.floor(Math.random() * 6 + 1);
    const youNumber = Math.floor(Math.random() * 6 + 1);
    const winner = gameWinner(myNumber, youNumber);

    setMyDice(myNumber);
    setYouDice(youNumber);
    setMyWinList((prev) => [...prev, myNumber]);
    setYouWinList((prev) => [...prev, youNumber]);

    if (winner === "WIN") setMyScore((prev) => prev + myNumber);
    if (winner === "LOST") setYouScore((prev) => prev + youNumber);
  };

  const diceNumberReset = () => {
    setMyDice(INITIAL_NUMBER + 1);
    setYouDice(INITIAL_NUMBER + 1);
    setMyWinList([]);
    setYouWinList([]);
    setMyScore(INITIAL_NUMBER);
    setYouScore(INITIAL_NUMBER);
  };

  return (
    <section className="GameDice">
      <div>
        <img className="App-logo" src={logo} alt="주사위게임 로고" />
        <h1 className="App-title">주사위게임</h1>
        <div>
          <DiceButton color="blue" onclick={diceRandonNumber}>
            던지기
          </DiceButton>
          <DiceButton color="red" onclick={diceNumberReset}>
            처음부터
          </DiceButton>
        </div>
      </div>
      <div className="App-boards">
        <DiceBoard
          winner={
            myScore === 0 && youScore === 0 ? "" : gameWinner(myDice, youDice)
          }
          number={myDice}
          color={"blue"}
          list={myWinList && myWinList.join(", ")}
          score={myScore}
        />
        <DiceBoard
          winner={
            myScore === 0 && youScore === 0 ? "" : gameWinner(youDice, myDice)
          }
          number={youDice}
          color={"red"}
          list={youWinList && youWinList.join(", ")}
          score={youScore}
        />
      </div>
    </section>
  );
}

export default GameDice;

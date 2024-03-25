import "../styles/pages/rps.css";
import reset from "../assets/gameRPS/ic-reset.svg";
import HandImage from "../components/gameRPS/HandImage";
import HandButton from "../components/gameRPS/HandButton";
import { useState } from "react";
import {
  HAND,
  getResult,
  generateRandomHand,
} from "../components/gameRPS/utils";

const INITIAL_HAND = "rock";
function GameRPS() {
  const [myHand, setMyHand] = useState(INITIAL_HAND);
  const [youHand, setYouHand] = useState(INITIAL_HAND);
  const [gameHistory, setGameHistory] = useState([]);
  const [myScore, setMyScore] = useState(0);
  const [youScore, setYouScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handBtnClick = (value) => {
    const randomHand = generateRandomHand();
    const Winner = getResult(value, randomHand);
    setYouHand(randomHand);
    setMyHand(value);
    setGameHistory((prev) => [...prev, Winner]);

    if (Winner === "승리") setMyScore((prev) => prev + bet);
    if (Winner === "패배") setYouScore((prev) => prev + bet);
  };

  const scoreChange = (e) => {
    let num = Number(e.target.value);
    if (num > 9) num %= 10;
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };

  const cleareBtnClick = () => {
    setMyHand(INITIAL_HAND);
    setYouHand(INITIAL_HAND);
    setGameHistory([]);
    setBet(1);
  };

  return (
    <div className="GameRPS">
      <h1 className="App-heading">가위바위보</h1>
      <img
        className="App-reset"
        src={reset}
        alt="초기화"
        onClick={cleareBtnClick}
      />

      <div className="App-scores">
        <div className="Score">
          <div className="Score-num">{myScore}</div>
          <div className="Score-name">나</div>
        </div>
        <div className="App-versus">:</div>
        <div className="Score">
          <div className="Score-num">{youScore}</div>
          <div className="Score-name">상대</div>
        </div>
      </div>
      <div className="Box App-box">
        <div className="Box-inner">
          <div className="App-hands">
            <div className="Hand">
              <HandImage className="Hand-icon" value={myHand} />
            </div>
            <div className="App-versus">VS</div>
            <div className="Hand">
              <HandImage className="Hand-icon" value={youHand} />
            </div>
          </div>
          <div className="App-bet">
            <span>배점</span>
            <input
              type="number"
              min="1"
              max="9"
              step="1"
              value={bet}
              onChange={scoreChange}
            />
            <span>배</span>
          </div>
          <div className="App-history">
            <h2>승부기록</h2>
            <p>{gameHistory.join(", ")}</p>
          </div>
        </div>
      </div>
      {HAND.map((data, i) => (
        <HandButton key={i} value={data} onClick={handBtnClick} />
      ))}
    </div>
  );
}
export default GameRPS;

import "../styles/pages/rps.css";
import reset from "../assets/gameRPS/ic-reset.svg";
import HandlerHand from "../components/gameRPS/HandlerHand";
import { useState } from "react";
import {
  HAND,
  getResult,
  generateRandomHand,
} from "../components/gameRPS/utils";
import Score from "../components/gameRPS/Score";
import { Helmet } from "react-helmet";

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
    setMyScore(0);
    setYouScore(0);
    setBet(1);
  };

  return (
    <div className="GameRPS">
      <Helmet>
        <title>가위바위보 게임</title>
      </Helmet>
      <h1 className="App-heading">가위바위보</h1>
      <img
        className="App-reset"
        src={reset}
        alt="초기화"
        onClick={cleareBtnClick}
      />

      <div className="App-scores">
        <Score score={myScore}>나</Score>
        <div className="App-versus">:</div>
        <Score score={youScore}>상대</Score>
      </div>
      <div className="Box App-box">
        <div className="Box-inner">
          <div className="App-hands">
            <HandlerHand
              as={"div"}
              className={"Hand"}
              imgClassName={"Hand-icon"}
              value={myHand}
            />
            <div className="App-versus">VS</div>
            <HandlerHand
              as={"div"}
              className={"Hand"}
              imgClassName={"Hand-icon"}
              value={youHand}
            />
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
            <h2>나의 승부기록</h2>
            <p>{gameHistory.join(", ")}</p>
          </div>
        </div>
      </div>
      {HAND.map((data, i) => (
        <HandlerHand key={i} value={data} onClick={handBtnClick} />
      ))}
    </div>
  );
}
export default GameRPS;

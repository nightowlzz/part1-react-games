export const HAND = ["rock", "scissor", "paper"];

const WINS = {
  rock: "scissor",
  scissor: "paper",
  paper: "rock",
};

export function getResult(left, right) {
  if (WINS[left] === right) return "승리";
  else if (left === WINS[right]) return "패배";
  return "무승부";
}

function Random() {
  return Math.floor(Math.random() * HAND.length);
}

export function generateRandomHand() {
  const idx = Random(HAND.length);
  return HAND[idx];
}

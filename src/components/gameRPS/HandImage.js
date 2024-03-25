import rock from "../../assets/gameRPS/rock.svg";
import scissor from "../../assets/gameRPS/scissor.svg";
import paper from "../../assets/gameRPS/paper.svg";

const HAND_IMAGES = {
  rock,
  scissor,
  paper,
};

export default function HandImage({ className = "HandButton-icon", value }) {
  const src = `${HAND_IMAGES[value]}`;
  return <img className={className} src={src} alt={value} />;
}

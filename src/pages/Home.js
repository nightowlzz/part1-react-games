import dise from "../assets/gameDise/logo.png";
import rps1 from "../assets/GameRPS/scissor.svg";
import rps2 from "../assets/GameRPS/rock.svg";
import rps3 from "../assets/GameRPS/paper.svg";
import { Link } from "react-router-dom";
import { Games, HomeWrap, ImgCenter } from "../styles/pages/styles";

export const HOME_IMAGES = {
  dise: [dise],
  rps: [rps1, rps2, rps3],
};

function HomeButton({ children, imgs, url, name }) {
  return (
    <Link to={url}>
      <Games>
        <ImgCenter>
          {imgs.map((data, i) => (
            <img key={i} className={`img__${name}`} src={data} />
          ))}
        </ImgCenter>
        {children}
      </Games>
    </Link>
  );
}

export default function Home() {
  return (
    <HomeWrap as="section">
      <HomeButton url={"/dise"} imgs={HOME_IMAGES.dise} name={"dice"}>
        주사위 게임
      </HomeButton>
      <HomeButton
        url={"/rock-paper-scissors"}
        imgs={HOME_IMAGES.rps}
        name={"hands"}
      >
        가위바위보 게임
      </HomeButton>
    </HomeWrap>
  );
}

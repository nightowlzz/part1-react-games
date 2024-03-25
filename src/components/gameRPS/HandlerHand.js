import styled from "styled-components";
import HandImage from "./HandImage";

const InteractiveImage = styled.button``;
function HandButton({
  as = "",
  className = "HandButton",
  imgClassName = "HandButton-icon",
  value = "rock",
  onClick,
}) {
  const handleClick = () => onClick(value);
  return (
    <InteractiveImage as={as} className={className} onClick={handleClick}>
      <HandImage imgClassName={imgClassName} value={value} />
    </InteractiveImage>
  );
}

export default HandButton;

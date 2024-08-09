import styled from "styled-components";

interface CustomScrollbarProps {
  display: string;
  size: number;
  color: string;
}

const CustomScrollbar = styled.div<CustomScrollbarProps>`
  &::-webkit-scrollbar {
    display: ${(props) => `${props.display}`};
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => `${props.color}BF`};
    border-radius: 20px;
    border: 2px solid transparent;
    &:hover {
      background-color: ${(props) => `${props.color}`};
    }
  }
`;

export default CustomScrollbar;

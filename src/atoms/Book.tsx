import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  status: string;
  img: string;
}
class Book extends React.Component<Props> {
  componentDidMount() {}

  render() {
    return (
      <BookContainer status={this.props.status}>
        <img alt={this.props.title} src={this.props.img} />
      </BookContainer>
    );
  }
}

export default Book;

const BookContainer = styled.div`
  cursor: pointer;
  display: inline-block;
  width: 150px;
  height: 220px;
  position: relative;
  background: ${props => (props.status === "貸出中" ? "black" : "white")};
  z-index: 1;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 9px 20px 0 rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: box-shadow 0.2s linear;
  img {
    width: inherit;
    height: inherit;
    transform-origin: 0 50%;
    transform: rotateY(0);
    transition: all 0.45s ease;
  }
  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25),
      0 9px 20px 0 rgba(0, 0, 0, 0.45);
  }
  &:hover img {
    transform: rotateY(-50deg);
    box-shadow: 1px 3px 5px 5px rgba(0, 0, 0, 0.2);
  }
  &::after,
  &::before {
    content: "";
    display: block;
    width: inherit;
    height: inherit;
    position: absolute;
    z-index: -1;
    top: 0;
    background: white;
    border: 1px solid #d9d9d9;
  }
  &::before {
    left: -3px;
  }
  &::after {
    left: -6px;
  }
`;

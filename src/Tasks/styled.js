import styled, { css } from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  grid-gap: 15px;
  margin-bottom: 10px;
  border-bottom: 2px solid #eee;
  list-style-type: none;
  padding: 0%;
`;

export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  grid-gap: 15px;
  margin-bottom: 10px;
  padding: 8px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  color: #fff;
  background-color: green;
  cursor: pointer;
  transition: 0.35s;
  flex-shrink: 0;

  &:hover {
    background-color: hsl(120, 100%, 35%);
  }

  &:active {
    background-color: hsl(120, 100%, 45%);
  }

  ${({ remove }) =>
    remove &&
    css`
      width: 35px;
      height: 35px;
      border: none;
      color: #fff;
      background-color: red;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.35s;

      &:hover {
        background-color: hsl(0, 100%, 65%);
      }

      &:active {
        background-color: hsl(0, 100%, 75%);
      }
    `}
`;

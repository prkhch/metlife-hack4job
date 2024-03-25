import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const RiseAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SelectAnimation = keyframes`
from {
}
to {
  background-color: #0090da;
  color: white;
}
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Radius = styled.div`
  border-radius: 16px 16px 0px 0px;
  height: 2rem;
  background-color: #ffffff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Ul = styled.ul`
  position: absolute;
  bottom: 0;
  animation: ${RiseAnimation} 0.2s forwards ease-in;
  z-index: 1;
  margin: 0 auto;
  width: 100%;
  max-height: 30vh;
  list-style: none;
  padding: 0;
  border-radius: 16px 16px 0 0;

  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  font-family: "main";
`;

export const Li = styled.li`
  background-color: #ffffff;
  cursor: pointer;
  text-align: center;
  padding: 0.2rem 0;
  &:hover {
    outline: none;
    border: none;
    animation: ${SelectAnimation} 0.2s forwards ease-in-out;
  }
  font-family: "main";
`;

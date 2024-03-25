import React, { useEffect } from "react";
import Lottie from "react-lottie";
import loadingLottie from "../assets/Loading.json";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => navigate("/result"), 2000);
  }, []);

  return (
    <Wrapper>
      <Lottie options={defaultOptions} height={350} width={350} />
      <LoadingText onClick={() => navigate("/result")}>
        잠시만 기다려주세요.
      </LoadingText>
    </Wrapper>
  );
};

export const LoadingText = styled.div`
  font-family: "main";
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default LoadingPage;

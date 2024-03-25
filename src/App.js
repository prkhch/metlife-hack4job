import AppRoute from "./config/AppRoute";
import styled from "@emotion/styled";

function App() {
  return (
    <Wrapper>
      <AppRoute />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: white;
  height: 100vh;
`;

export default App;

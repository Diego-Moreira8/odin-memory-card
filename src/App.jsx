import "./reset.css";
import Header from "./components/Header";
import MyFooter from "./components/MyFooter";
import styled, { ThemeProvider } from "styled-components";
import mainFont from "../src/fonts/ness.ttf";
import Game from "./components/Game";

const StyledApp = styled.div`
  background: linear-gradient(#141146, #251e62);
  min-height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr auto;

  @font-face {
    font-family: Ness;
    src: ${mainFont};
  }
  font-family: Ness, "Comic Sans MS", sans-serif;
`;

const theme = {
  black: "#000",
  white: "#fff",
  yellow: "#F9CD24",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Header />
        <Game />
        <MyFooter />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from "styled-components";
import Button from "components/Button";
import { GlobalStyle } from "styles/global.styled";
import { lightTheme } from "styles/themes";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <GlobalStyle />
        <Button icon="home" width={100} height={100} rounded>
          코딩마차
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;

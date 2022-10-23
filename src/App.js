import Button from "./components/Button";
import { GlobalStyle } from "./styles/global.styled";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Button icon="home" width={100} height={100} rounded>
        코딩마차
      </Button>
    </div>
  );
}

export default App;

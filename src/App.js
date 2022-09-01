import { Input } from './components/input';
import { Wrapper } from './styles/app.styled';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <Wrapper>
      <Input place={"Digite seu nome"}/>
      <Input place={"Digite o valor do pix"}/>
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;

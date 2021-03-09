import './App.css';
import Home from './pages/Home';
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home className="App"></Home>      
    </ChakraProvider >
  );
}

export default App;

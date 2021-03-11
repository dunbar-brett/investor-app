import './App.css';
import Home from './pages/Home';
import { ChakraProvider, Box } from '@chakra-ui/react'
import theme from "./theme"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="slategray" minH="100vh" pt="4rem">
        <Home className="App"></Home>      
      </Box>
    </ChakraProvider >
  );
}

export default App;

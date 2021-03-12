import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from "./theme";
import ExportRouter from './Router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="slategray" minH="100vh" pt="4rem">
        <ExportRouter></ExportRouter>      
      </Box>
    </ChakraProvider >
  );
}

export default App;

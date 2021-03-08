import './App.css';
import InvestorForm from './components/InvestorForm';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <InvestorForm className="App"></InvestorForm>      
    </ChakraProvider >
  );
}

export default App;

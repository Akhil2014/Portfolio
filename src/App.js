
import { Box } from '@chakra-ui/react';
import './App.css';
import HolePage from './Pages/HolePage';
import Navbar, { dark } from './Pages/Navbar';

function App() {
  return (
    <Box w="100%" bg={dark}>
      <Navbar />
      <HolePage />
    </Box>
  );
}

export default App;

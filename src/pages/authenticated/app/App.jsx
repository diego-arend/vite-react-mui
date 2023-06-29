import { Box } from '@mui/material';
import Header from '../../../components/header/Header';
import SideMenu from '../../../components/side-menu/SideMenu';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <SideMenu />
    </Box>
  );
}

export default App;

import { Box, Container } from '@mui/material';
import Header from '../../../components/header/Header';
import SideMenu from '../../../components/side-menu/SideMenu';
import Footer from '../../../components/footer/Footer';

function App() {
  return (
    <Container>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <SideMenu />
        <Footer />
      </Box>
    </Container>
  );
}

export default App;

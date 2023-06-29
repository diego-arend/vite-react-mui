import { AppBar, Avatar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h4"
          color="inherit"
          style={{ textAlign: 'center' }}
        >
          Header
        </Typography>
        <Avatar
          sx={{ width: 40, height: 40 }}
          alt="edupala profile"
          src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

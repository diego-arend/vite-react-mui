import { AppBar, Grid, Paper, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Paper
      style={{
        position: 'absolute',
        textAlign: 'center',
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <Grid container>
        <AppBar position="static" style={{ backgroundColor: 'red' }}>
          <Toolbar variant="dense">
            <Typography
              variant="caption"
              color="inherit"
              style={{ flexGrow: 1 }}
            >
              © Copyright 2017
            </Typography>
            <Typography color="inherit" variant="caption">
              V1.0
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
    </Paper>
  );
};

export default Footer;

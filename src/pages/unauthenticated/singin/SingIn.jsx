import { useTheme } from '@mui/material/styles';
import { LockOpenOutlined } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { CSS_BASE_STYLES } from '../../../constants/BasicStyles';

function SingIn() {
  const theme = useTheme();

  return (
    <Grid container>
      <Grid
        style={CSS_BASE_STYLES.GRID_BASIC}
        item
        xs={12}
        component={Paper}
        elevation={1}
        square
      >
        <Paper style={CSS_BASE_STYLES.PAPER_BASIC}>
          <Avatar
            style={{
              backgroundColor: `${theme.palette.secondary.main}`,
              margin: `${theme.spacing(1)}`,
            }}
          >
            <LockOpenOutlined />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            style={{
              margin: `${theme.spacing(1)}`,
            }}
          >
            Sign In
          </Typography>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': {
                width: 'fullwidth',
                marginTop: `${theme.spacing(1)}`,
                marginBottom: `${theme.spacing(1)}`,
              },
            }}
            autoComplete="off"
          >
            <div>
              <TextField
                fullWidth
                error
                id="login-text-field"
                label="Login"
                helperText="Incorrect entry."
              />
            </div>
            <div>
              <TextField
                fullWidth
                error
                id="password-text-field"
                label="Password"
                helperText="Incorrect entry."
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // className={classes.submit}
              // onClick={handelLogin}
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default SingIn;

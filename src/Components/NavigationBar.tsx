import { AppBar, Button, Paper, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const handleDashboardClick = () => {
    navigate("/")
  };

  const handleCreateAdsClick = () => {
    navigate("/create-ads")
  };
  return (
      <AppBar position="fixed" color="default">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">APP LOGO</Typography>
        <div>
          <Button color="inherit" onClick={handleDashboardClick}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={handleCreateAdsClick}>
            Create Ads
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;

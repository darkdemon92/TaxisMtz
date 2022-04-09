import './App.css';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Cards from './components/cards' 
  
function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(8)).map((_, index) => (
          <Grid item xs={4} sm={4} md={3} key={index}>
            <Cards />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default App;

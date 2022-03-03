import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { loadAllApps } from '../redux/actions/appsActions';
import { RootState } from '../redux/rootReducer';

const Home: React.FC = () => {
  const { apps } = useSelector((state: RootState) => state.apps);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllApps());
  }, [ dispatch ]);

  return (
    <Container 
      maxWidth="md"
      sx={{
        marginTop: 8,
      }}
    >
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {apps.map((item: any) => (
          <Grid item xs={2} sm={3} md={3} key={item.id}>
            <Paper key={item.id}>
              <RouterLink to={`/${item.id}`}>
                <img src={item.logoUrl} alt={item.appName}></img>
              </RouterLink>
              <Typography variant="subtitle1" component="h2">
                {item.appName}
              </Typography>
              <Chip label={item.category} onClick={() => {}} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Home;
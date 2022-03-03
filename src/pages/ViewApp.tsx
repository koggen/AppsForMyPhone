import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import { viewApp } from '../redux/actions/appsActions';
import { RootState } from '../redux/rootReducer';

const Login: React.FC = () => {

  const { app } = useSelector((state: RootState) => state.apps);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {

    dispatch(viewApp(id));

  }, [ dispatch, id ])

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <img src={app.logoUrl as string | undefined} alt={app.appName as string | undefined}></img>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4" component="h1">
              {app.appName}
            </Typography>
            <Chip label={app.category} onClick={() => {}} />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          marginTop: 3,
        }}
      >
        <Typography>
          {app.appDescription}
        </Typography>
      </Box>
    </Container>
  );
}

export default Login;
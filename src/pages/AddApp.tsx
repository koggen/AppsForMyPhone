import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AppsIcon from '@mui/icons-material/Apps';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { addApp } from '../redux/actions/appsActions';

const  initialAddAppState = {
  appName: "",
  logoUrl: "",
  category: "",
  appDescription: ""
}

const AddApp: React.FC = () => {
  const [appData, setAppData] = useState(initialAddAppState);

  const { appName, logoUrl, category, appDescription } = appData;

  const dispatch = useDispatch();

  //const navigate = useNavigate();

  // useEffect(() => {
  //   if(!currentUser) {
  //     navigate("/");
  //   }
  // }, [ currentUser, navigate ])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setAppData({...appData, [e.target.name] : e.target.value});
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addApp(appData));
    setAppData(initialAddAppState);
  }

  const handleChange1 = (e: SelectChangeEvent) => {
    setAppData({...appData, category: e.target.value as string});
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary' }}>
          <AppsIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add app
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="off"
                name="appName"
                required
                fullWidth
                id="appName"
                label="App Name"
                autoFocus
                value={appName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="off"
                name="logoUrl"
                required
                fullWidth
                label="App Icon Url"
                type="url"
                id="logoUrl"
                value={logoUrl}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="categorieSelectLabel">Categories</InputLabel>
                <Select
                  labelId="categorieSelectLabel"
                  id="categorieSelect"
                  value={category}
                  label="Categories"
                  onChange={handleChange1}
                >
                  <MenuItem value={'Communication'}>Communication</MenuItem>
                  <MenuItem value={'Education'}>Education</MenuItem>
                  <MenuItem value={'Entertainment'}>Entertainment</MenuItem>
                  <MenuItem value={'Finance'}>Finance</MenuItem>
                  <MenuItem value={'Games'}>Games</MenuItem>
                  <MenuItem value={'Utilities'}>Utilities</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                name="appDescription"
                id="appDescription"
                minRows={6}
                maxRows={12}
                aria-label="maximum height"
                placeholder="App description"
                style={{ width: "100%" }}
                value={appDescription}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  )
};

export default AddApp;
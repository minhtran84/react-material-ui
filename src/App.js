import React from 'react';

import { 
  CssBaseline, Container, Grid, Typography, 
  Card, CardActions, CardHeader, CardContent
} from '@material-ui/core';

import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// import {  } from './components';

//USAGE MATERIAL-UI STYLES IN CLASS COMPONENT
const useStyles = myStyles => ({
  card: {
    background: 'linear-gradient(55deg, hsla(212, 35%, 58%, 1) 0%, hsla(218, 32%, 80%, 1) 100%)',

  },
});

//USE MATERIAL-UI THEME FOR APP BACKGROUND
const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: '#0d1117', //copied from Github.com
          color: '',
        },
      },
    },
  },
});

//DEFINE THE MAIN CLASS COMPONENT
class App extends React.Component {

  //DEFINE states to be used in the App
  // state = {}

  render() {

    //USAGE MATERIAL-UI STYLES IN CLASS COMPONENT
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        <Container>
          <Grid container justify="center">
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardHeader title="Some header text goes here" />
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

      </MuiThemeProvider>
    ) //END return()

  } //END render()

}// END CLASS COMPONENT

// export default App;
    
//USAGE MATERIAL-UI STYLES IN CLASS COMPONENT
export default withStyles(useStyles)(App);

import React from 'react';

import { 
  CssBaseline, Container, Grid, Typography, 
  Card, CardActions, CardHeader, CardContent
} from '@material-ui/core';

import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { SimpleCard } from './components';

//USAGE MATERIAL-UI STYLES IN CLASS COMPONENT
const useStyles = myStyles => ({
  someComponent: {

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
  state = {
    counter: 0,
  }

  componentDidMount = () => {
    setInterval (() => {
      this.setState({
        counter: this.state.counter + 1,
      })
    }, 10000)
  }

  render() {

    //USAGE MATERIAL-UI STYLES IN CLASS COMPONENT
    const { classes } = this.props;

    const { counter } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        <Container>
          <Grid container justify="center">
            <Grid item xs={12} sm={6}>
              <SimpleCard />
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Typography gutterBottom variant="caption" align="center" color="primary">
            counter: {counter}
          </Typography>
        </Container>

      </MuiThemeProvider>
    ) //END return()

  } //END render()

}// END CLASS COMPONENT

// export default App;
    
//USAGE MATERIAL-UI STYLES IN CLASS COMPONENT
export default withStyles(useStyles)(App);

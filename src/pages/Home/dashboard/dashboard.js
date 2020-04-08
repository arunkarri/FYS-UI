import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Charts from "./charts/charts";
import Cards from './cards/cards';
import "./dashboard.css";
// import '../main.css';

const useStyles = makeStyles(theme => ({
  control: {
    padding: theme.spacing(2),
  },
}));

{/* Dashboard Function */}

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (

    /* Dashboard */
    
    <div className="mainSection">
    
    {/* Dashboard Start */}

      <Grid container spacing={2}>

        {/* Charts */}

        <Grid item xs={12} sm={6} >
          
          <Charts />
        </Grid>

        {/* Info */}
      
        <Grid item xs={12} sm={6}>
          <Cards />
        </Grid>

      </Grid>

    {/* Dashboard End */}

    </div>

  );
}
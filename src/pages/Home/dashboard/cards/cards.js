import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import "./cards.css";
// import "../main.css";

{/* Cards Function */}

export default function Cards() {
    return (

        <div>

                {/* Cards Start */}

                {/* Our Funds Label */}
                
                <h2 className="label">Our Funds</h2>
                
                <div>
                        <Grid container className="root" spacing={3}>

                                {/* Card 1 */}

                                <Grid item xs={12} sm={6}>
                                        <Paper className="paper card">  
                                                <h3>Name 1</h3>
                                                <p><strong>Desc: </strong>Lorem ipsum dolor sit amet.</p>   
                                        </Paper>
                                </Grid>

                                {/* Card 2 */}

                                <Grid item xs={12} sm={6}>
                                        <Paper className="paper card">
                                                <h3>Name 1</h3>
                                                <p><b>Desc: </b>Lorem ipsum dolor sit amet.</p>
                                        </Paper>
                                </Grid>
                        </Grid>

                        <Grid container className="root" spacing={3}>

                                {/* Card 3 */}

                                <Grid item xs={12} sm={6}>
                                        <Paper className="paper card">
                                                <h3>Name 1</h3>
                                                <p><b>Desc: </b>Lorem ipsum dolor sit amet.</p>
                                        </Paper>
                                </Grid>

                                {/* Card 4 */}

                                <Grid item xs={12} sm={6}>

                                        <Paper className="paper card">
                                                <h3>Name 1</h3>
                                                <p><b>Desc: </b>Lorem ipsum dolor sit amet.</p>
                                        </Paper>
                                </Grid>
                        </Grid>

                </div>

                                {/* Our Pilot Partners */}               

                <h2 className="label">Our Pilot Partners</h2>

                <div>
                        <Grid container className="root" spacing={3}>

                                

                                {/* Card 1 */}

                                <Grid item xs={12} sm={6}>
                                        <Paper className="paper card">
                                                <h3>Name 1</h3>
                                                <p><b>Desc: </b>Lorem ipsum dolor sit amet.</p>
                                        </Paper>
                                </Grid>

                                {/* Card 2 */}

                                <Grid item xs={12} sm={6}>
                                        <Paper className="paper card">
                                                <h3>Name 1</h3>
                                                <p><b>Desc: </b>Lorem ipsum dolor sit amet.</p>
                                        </Paper>
                                </Grid>
                        </Grid>

                        <Grid container className="root" spacing={3}>

                                {/* Card 3 */}

                                <Grid item xs={12} sm={6}>
                                        <Paper className="paper card">
                                                <h3>Name 1</h3>
                                                <p><b>Desc: </b>Lorem ipsum dolor sit amet.</p>
                                        </Paper>
                                </Grid>

                                {/* Card 4 */}

                                <Grid item xs={12} sm={6}>
                                        <Paper className="paper card">
                                                <h3>Name 1</h3>
                                                <p><b>Desc: </b>Lorem ipsum dolor sit amet.</p>
                                        </Paper>
                                </Grid>
                        </Grid>
                </div>
        </div>

    )
}

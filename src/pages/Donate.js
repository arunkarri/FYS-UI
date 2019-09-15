import React, { Component } from 'react';
import m from '../variables/material';
import { API_ROOT } from '../variables/api';
import styles from '../utils/styles';

  


class Donate extends Component {


  constructor(props) {
    super(props);
    this.state = {
      schoolDetails: {},
      projectDetails: [],
      project: '',
      redirectURI: '',
      currentURI: window.location.href
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    fetch(`${API_ROOT}/rest/school/${params.code}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": JSON.stringify(localStorage.getItem('token'))
      }
    })
      .then((resp) => {
        return resp.clone().json();
      })
      .then((res) => {
        this.setState({ schoolDetails: res });
      });

    fetch(`${API_ROOT}/rest/school/project/${params.code}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": JSON.stringify(localStorage.getItem('token'))
      }
    })
      .then((resp) => {
        return resp.clone().json();
      })
      .then((res) => {
        this.setState({ projectDetails: res });
        console.log(this.state.projectDetails);
      });
  }
  handleChange(event) {
    console.log(event);
    this.setState({
      project: event.target.value
    });
  }
  render() {
    return (
      <div>
        <m.Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >

          <m.Grid item xs={3}>
            <m.Card>
              <m.CardActionArea>
                <m.CardContent>
                  <m.Typography gutterBottom variant="h5" component="h2">
                    Please select a project
                                            </m.Typography>
                  <m.FormControl className={styles.formControl}>
                    <m.InputLabel htmlFor="age-helper">Project</m.InputLabel>
                    <m.Select
                      value={this.state.project}
                      onChange={this.handleChange.bind(this)}
                      inputProps={{
                        name: 'this.state.project',
                      }}
                    >
                      {this.state.projectDetails.map(project => (
                          <m.MenuItem value={project.projectName}>{project.projectName}</m.MenuItem>
                      ))};
                      
                    </m.Select>
                    <m.FormHelperText>Select project and continue to payment</m.FormHelperText>
                  </m.FormControl>
                  <br/><br/>
                  <m.Button variant="contained" color="secondary" size="medium">Continue</m.Button> 
                </m.CardContent>
               
              </m.CardActionArea>
            </m.Card>
          </m.Grid>

        </m.Grid>
      </div>
    )
  }
}


export default Donate;


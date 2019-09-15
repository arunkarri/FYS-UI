import React, { Component } from 'react';
import material from '../variables/material';
import { API_ROOT } from '../variables/api';
import styles from '../utils/styles';
import Card from '@material-ui/core/Card';
import GaugeChart from 'react-gauge-chart';
import DonateIcon from '../assets/donate.png';
import { Router, Route, Switch, Redirect } from "react-router-dom";


class SchoolDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            schoolDetails: {},
            projectDetails: [],
            modal: false,
            data: {},
            project: {},
            donate: false,
            redirectURI: false,
            currentURI: window.location.href,
            schoolCode: ''
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
            });
    }


    donatePage(obj) {
        console.log(obj);
        let code = obj.match.params.code;
        this.setState({ redirectURI: true, schoolCode: code });
        console.log(this.state.schoolCode);
    }

    render() {
        return (
            <div style={styles.deatilsContainer}>
                <div style={styles.detailsSidebar}>
                    <div style={styles.sidebarHeader}>
                        <material.Avatar style={styles.schoolProfileAvatar} src="https://upload.wikimedia.org/wikipedia/commons/8/82/2009-0617-Ontonagon-school.jpg"> </material.Avatar>
                    </div>
                    <div style={styles.sidebarTitle}>
                        <material.Typography gutterBottom variant="h5" component="h2"> {this.state.schoolDetails.schoolName} </material.Typography>
                    </div>
                    <div>
                        <material.ExpansionPanel>
                            <material.ExpansionPanelSummary
                                expandIcon={<material.ExpandMoreIcon />}
                            >
                                <material.Typography> Details </material.Typography>
                            </material.ExpansionPanelSummary>
                            <material.ExpansionPanelDetails>
                                <material.Typography style={styles.accordionDetailsContainer} variant="body2" color="textSecondary" component="p">
                                    <span style={styles.subHeader}>
                                        <span style={styles.accordionDetails}>
                                            <span style={styles.detailsHeader}> Description </span>
                                            <span> {this.state.schoolDetails.desc} </span>
                                        </span>
                                        <span style={styles.accordionDetails}>
                                            <span style={styles.detailsHeader}> Unique# </span>
                                            <span> {this.state.schoolDetails.school_id} </span>
                                        </span>
                                        <span style={styles.accordionDetails}>
                                            <span style={styles.detailsHeader}> Education Board </span>
                                            <span> CBSE--- </span>
                                        </span>
                                        <span style={styles.accordionDetails}>
                                            <span style={styles.detailsHeader}> Medium </span>
                                            <span> English--- </span>
                                        </span>
                                        <span style={styles.accordionDetails}>
                                            <span style={styles.detailsHeader}> Teacher(s) </span>
                                            <span>{this.state.schoolDetails.teacherCount} </span>
                                        </span>
                                        <span style={styles.accordionDetails}>
                                            <span style={styles.detailsHeader}> Subject(s) </span>
                                            <span>{this.state.schoolDetails.subjectCount} </span>
                                        </span>
                                        <span style={styles.accordionDetails}>
                                            <span style={styles.detailsHeader}> Gender Ratio </span>
                                            <span> {this.state.schoolDetails.genderRatio} </span>
                                        </span>
                                    </span>
                                </material.Typography>
                            </material.ExpansionPanelDetails>
                        </material.ExpansionPanel>
                        <material.ExpansionPanel>
                            <material.ExpansionPanelSummary
                                expandIcon={<material.ExpandMoreIcon />}
                            >
                                <material.Typography> Location </material.Typography>
                            </material.ExpansionPanelSummary>
                            <material.ExpansionPanelDetails>
                                <material.Typography style={styles.accordionDetailsContainer} variant="body2" color="textSecondary" component="p">
                                    <span style={styles.subHeader}>
                                        <span style={styles.accordionDetails}>
                                            <span style={styles.detailsHeader}> Location </span>
                                            <span> {this.state.schoolDetails.village} </span>
                                        </span>
                                        <span style={styles.accordionDetails}>
                                            <span style={styles.detailsHeader}> Panchayat  </span>
                                            <span> {this.state.schoolDetails.panchayatDesc} </span>
                                        </span>
                                    </span>
                                </material.Typography>
                            </material.ExpansionPanelDetails>
                        </material.ExpansionPanel>
                        <material.ExpansionPanel>
                            <material.ExpansionPanelSummary
                                expandIcon={<material.ExpandMoreIcon />}
                            >
                                <material.Typography> Projects </material.Typography>
                            </material.ExpansionPanelSummary>
                            <material.ExpansionPanelDetails>
                                <material.Typography style={styles.accordionDetailsContainer} variant="body2" color="textSecondary" component="p">
                                    <span style={styles.subHeader}>
                                        <span style={styles.accordionDetails}>
                                            <span style={styles.detailsHeader}> Allocated Funds(Rs) </span>
                                            <span> 10,000--- </span>
                                        </span>
                                        <span style={styles.accordionDetails}>
                                            <span style={styles.detailsHeader}> Completed Projects  </span>
                                            <span> a,b,c--- </span>
                                        </span>
                                    </span>
                                </material.Typography>
                            </material.ExpansionPanelDetails>
                        </material.ExpansionPanel>
                        <material.ExpansionPanel>
                            <material.ExpansionPanelSummary
                                expandIcon={<material.ExpandMoreIcon />}
                            >
                                <material.Typography> Contact </material.Typography>
                            </material.ExpansionPanelSummary>
                            <material.ExpansionPanelDetails>
                                <material.Typography style={styles.accordionDetailsContainer} variant="body2" color="textSecondary" component="p">
                                    <span style={styles.subHeader}>
                                        <span style={styles.accordionDetails}>
                                            <span style={styles.detailsHeader}> Email: &nbsp; </span>
                                            <span> {this.state.schoolDetails.spocEmail} </span>
                                        </span>
                                    </span>
                                </material.Typography>
                            </material.ExpansionPanelDetails>
                        </material.ExpansionPanel>
                    </div>
                </div>
                <div style={styles.detailsMainContent}>
                    <div style={styles.projectsHeader}>
                        <material.Typography gutterBottom variant="h5" component="h2">
                            PROJECTS
                    </material.Typography>
                        <material.Button variant="contained" color="primary" size="large"
                            onClick={this.donatePage.bind(this, this.props)}
                        >
                            <img src={DonateIcon} /> &nbsp;&nbsp;
                            Donate</material.Button>
                        {this.state.redirectURI && (
                            <Redirect to={`/donate/${this.state.schoolCode}`} />
                        )}
                    </div>
                    <div>
                        {this.state.projectDetails.map(project => (
                            <material.Grid item xs={4}>
                                <Card key={project.project_id} style={styles.projectCard}>
                                    <material.CardActionArea>
                                        <material.CardContent>
                                            <material.Typography gutterBottom variant="h5" component="h2">
                                                {project.projectName}
                                            </material.Typography>
                                            <material.Typography variant="body2" color="textSecondary" component="p">
                                                <span style={styles.subHeader}>
                                                    <span> {project.projectDesc} </span>
                                                </span>
                                            </material.Typography>
                                            <div style={styles.guageBg}>
                                                <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["red", "yellow", "#00FF00"]} arcWidth={0.2} percent={(project.acheivedTarget * 100) / project.targetAmount} />
                                            </div>
                                            <span style={styles.progressText}>
                                                <span><b>Amount Collected: </b> {project.acheivedTarget} </span>
                                                <span><b> Fund Value:</b>  {project.targetAmount} </span>
                                            </span>
                                        </material.CardContent>
                                    </material.CardActionArea>
                                </Card>
                            </material.Grid>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}


export default SchoolDetails;


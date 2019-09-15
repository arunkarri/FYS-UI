import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import m from '../variables/material';
import { API_ROOT } from '../variables/api';
import styles from '../utils/styles';
import { Router, Route, Switch, Redirect } from "react-router-dom";


class Schools extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            filteredSchools: [],
            schools: []
        }
    }

    componentDidMount() {
        fetch(`${API_ROOT}/token`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.defaultToken)
        })
            .then(function (resp) {
                return resp.clone().json();
            })
            .then((res) => {
                console.log(res);
                localStorage.setItem('token', `Bearer ${res.token}`);

                fetch(`${API_ROOT}/rest/school/all`, {
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
                        this.setState({
                            filteredSchools: res.content,
                            schools: res.content
                        });
                    });
            });
    }

    defaultToken = {
        "userName": "browser",
        "fullName": "fundyourschool",
        "userType": "BROWSER"
    };

    handleChange(e) {
        if (e.target) {
            this.setState({
                filteredSchools: this.state.schools.filter(s =>
                    s.schoolName.toLowerCase().includes(e.target.value.toLowerCase()) || s.village.toLowerCase().includes(e.target.value.toLowerCase())
                )
            })
        }

    }

    schoolDetails(obj) {
        console.log(obj);
        this.setState({ redirect: true, schoolCode: obj.code });
        // this.props.history.push(`/main/projects/${this.state.schoolCode}`);
        console.log(this.state.schoolCode);
    }

    render() {
        return (
            <div style={styles.root}>
                <div style={styles.searchContainer}>
                    <m.Input
                        style={styles.searchInput}
                        id="adornment-search"
                        placeholder="SEARCH"
                        onChange={e => this.handleChange(e)}
                        endAdornment={
                            <m.InputAdornment position="end">
                                <m.IconButton aria-label="search">
                                    <m.SearchIcon />
                                </m.IconButton>
                            </m.InputAdornment>}
                    />
                </div>
                <div style={styles.schoolsContainer}>
                    <m.Grid container spacing={2}>
                        {this.state.filteredSchools.map(school => (
                            <m.Grid item xs={4}>
                                <Card key={school.code} style={styles.card}>
                                    <m.CardHeader
                                        avatar={
                                            <m.Avatar aria-label="recipe" className="avatar">
                                                 {school.schoolName.split('')[0].toUpperCase()}
                                            </m.Avatar>
                                        }
                                        action={
                                            <m.IconButton aria-label="settings">
                                                <m.MoreVertIcon />
                                            </m.IconButton>
                                        }
                                        title= {school.schoolName.toUpperCase()}
                                        subheader={<span><m.FontAwesomeIcon 
                                        icon={m.faMapMarkerAlt} />&nbsp;{school.village}</span>}
                                    ></m.CardHeader>
                                    <m.CardActionArea>
                                        <m.CardMedia
                                            component="img"
                                            alt="school"
                                            height="120"
                                            image="https://upload.wikimedia.org/wikipedia/commons/8/82/2009-0617-Ontonagon-school.jpg"
                                            title={school.schoolName}
                                        />
                                        <m.CardContent>
                                            <m.Typography variant="body2" color="textSecondary" component="p">
                                                <span style={styles.subHeader}>
                                                    <b> Unique ID: {school.school_id} </b>
                                                </span>
                                                <span style={styles.progressText}>
                                                    <b> Amount Collected: 2500 </b>
                                                    <b> Fund Value: 5000 </b>
                                                </span>
                                            </m.Typography>
                                            <m.LinearProgress
                                                variant="determinate"
                                                // color="secondary"
                                                value={50}
                                            />
                                        </m.CardContent>
                                    </m.CardActionArea>
                                    <m.CardActions>
                                        <m.Button size="small" color="primary"
                                            onClick={this.schoolDetails.bind(this, school)}>
                                            <b className="learnMore">Learn More</b>
                                        </m.Button>
                                        {this.state.redirect && (
                                            <Redirect from="/schools" to={`/details/${this.state.schoolCode}`} />
                                        )}
                                    </m.CardActions>
                                </Card>
                            </m.Grid>
                        ))}
                    </m.Grid>
                </div>
            </div>
        )
    }
}

export default Schools;

import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import material from '../variables/material';
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
                    <material.Input
                        style={styles.searchInput}
                        id="adornment-search"
                        placeholder="SEARCH"
                        onChange={e => this.handleChange(e)}
                        endAdornment={
                            <material.InputAdornment position="end">
                                <material.IconButton aria-label="search">
                                    <material.SearchIcon />
                                </material.IconButton>
                            </material.InputAdornment>}
                    />
                </div>
                <div style={styles.schoolsContainer}>
                    <material.Grid container spacing={2}>
                        {this.state.filteredSchools.map(school => (
                            <material.Grid item xs={4}>
                                <Card key={school.code} style={styles.card}>
                                    <material.CardActionArea>
                                        <material.CardMedia
                                            component="img"
                                            alt="school"
                                            height="50"
                                            image="https://upload.wikimedia.org/wikipedia/commons/8/82/2009-0617-Ontonagon-school.jpg"
                                            title={school.schoolName}
                                        />
                                        <material.CardContent>
                                            <material.Typography gutterBottom variant="h5" component="h2">
                                                {school.schoolName}
                                            </material.Typography>
                                            <material.Typography variant="body2" color="textSecondary" component="p">
                                                <span style={styles.subHeader}>
                                                    <span> Location: {school.village} </span>
                                                    <span> Unique Id: {school.school_id} </span>
                                                </span>
                                                <span style={styles.progressText}>
                                                    <span> Amount Collected: 2500 </span>
                                                    <span> Fund Value: 5000 </span>
                                                </span>
                                            </material.Typography>
                                            <material.LinearProgress
                                                variant="determinate"
                                                color="secondary"
                                                value={50}
                                            />
                                        </material.CardContent>
                                    </material.CardActionArea>
                                    <material.CardActions>
                                        <material.Button size="small" color="primary"
                                            onClick={this.schoolDetails.bind(this, school)}>
                                            Learn More
                            </material.Button>
                                        {this.state.redirect && (
                                            <Redirect from="/schools" to={`/details/${this.state.schoolCode}`} />
                                        )}
                                    </material.CardActions>
                                </Card>
                            </material.Grid>
                        ))}
                    </material.Grid>
                </div>
            </div>
        )
    }
}

export default Schools;

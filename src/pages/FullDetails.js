import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import material from '../variables/material';
import { API_ROOT } from '../variables/api';
import styles from '../utils/styles';


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
            });
    }

    render() {
        return (
            <div>
                Test
            </div>
        )
    }
}


export default SchoolDetails;

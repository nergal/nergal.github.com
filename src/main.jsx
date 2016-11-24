/*jshint esversion: 6 */

import '../assets/styles.less';

import dataSet from '../assets/data.json';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import axios from 'axios';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import SectionFactory from './sections.jsx';

ReactGA.initialize('UA-32170510-1');

class CVTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataset: [],
            metadata: {}
        };
    }

    getChildContext() {
        return {
            metadata: this.state.metadata,
            dataset: this.state.dataset
        };
    }

    processData(data) {
        this.setState({
            dataset: data.data,
            metadata: data.meta
        });
    }

    componentDidMount() {
        if (!dataSet) {
            this.processData(dataSet);
        } else {
            axios.get(this.props.dataSource)
                .then(res => {
                    try {
                        const sections = res.data;
                        this.processData(sections);
                    } catch (e) {
                        console.error(e);
                    }
                });
        }

        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={3} className="text-center">
                        <SectionFactory scheme="general" />
                    </Col>
                    <Col md={8} lg={6} mdOffset={1} lgOffset={3} smOffset={2}>
                        <SectionFactory scheme="overview" />
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col md={3}>
                        <SectionFactory scheme="sidebar" />
                    </Col>
                    <Col md={9}>
                        <SectionFactory scheme="experience" /><hr />
                        <SectionFactory scheme="additionally" />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

CVTemplate.childContextTypes = {
    metadata: React.PropTypes.object,
    dataset: React.PropTypes.array
};

ReactDOM.render(
    <CVTemplate dataSource="/assets/data.json"/>,
    document.getElementById('output')
);

import '../assets/styles.less';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import {Grid, Row, Col} from 'react-bootstrap';

import dataSet from '../assets/data.json';
import SectionFactory from './sectionFactory';

ReactGA.initialize('UA-32170510-1');

class CVTemplate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataset: [],
            metadata: {}
        };
    }

    static get childContextTypes() {
        return {
            metadata: PropTypes.object,
            dataset: PropTypes.array
        };
    }

    getChildContext() {
        return {
            metadata: this.state.metadata,
            dataset: this.state.dataset
        };
    }

    componentDidMount() {
        this.setState({
            dataset: dataSet.data,
            metadata: dataSet.meta
        });

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
                        <SectionFactory scheme="experience" />
                        <hr />
                        <SectionFactory scheme="additionally" />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

ReactDOM.render(
    <CVTemplate />,
    document.getElementById('output')
);

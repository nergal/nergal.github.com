/*jshint esversion: 6 */

import '../assets/styles.less';

import dataSet from '../assets/data.json';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SectionFactory from './sections.jsx';

class CVTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: []
        };
    }

    componentWillMount() {
        if (dataSet) {
            this.setState({
                sections: dataSet.data
            });
        } else {
            axios.get(this.props.dataSource)
                .then(res => {
                    try {
                        const sections = res.data;
                        this.setState({
                            sections: sections.data
                        });
                    } catch (e) {
                        console.error(e);
                    }
                });
        }
    }

    render() {
        const sections = this.state.sections;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3 text-center">
                        <SectionFactory dataset={sections} scheme="general" />
                    </div>
                    <div className="col-md-6 col-md-offset-3 col-xs-offset-2">
                        <SectionFactory dataset={sections} scheme="overview" />
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-3">
                        <SectionFactory dataset={sections} scheme="sidebar" />
                    </div>
                    <div className="col-md-9">
                        <SectionFactory dataset={sections} scheme="experience" /><hr />
                        <SectionFactory dataset={sections} scheme="additionally" />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <CVTemplate dataSource="/assets/data.json"/>,
    document.getElementById('output')
);

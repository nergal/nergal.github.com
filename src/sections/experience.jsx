/*jshint esversion: 6 */
import _ from 'lodash';
import React from 'react';
import reactStringReplace from 'react-string-replace';

function VendorBadge (props) {
    if ( ! props.name) {
        return null;
    }

    if (props.url) {
        return (
            <span className="vendor">(at <a target="_blank" href={props.url}>{props.name}</a>)</span>
        );
    }

    return <span className="vendor">(at {props.name})</span>;
}

function CompanyBadge (props) {
    const item = props.data;
    const companyString = [
        <span className="text-capitalize">{item.companyType}</span>,
        item.company && ` "${item.company}"`
    ];

    return (
        <h3>
            {item.companyUrl ? <a target="_blank" href={item.companyUrl}>{companyString}</a> : companyString}
            <VendorBadge name={item.vendor} url={item.vendorUrl} />
            <small className="text-capitalize"> {item.title}</small>
        </h3>
    );
}

function RenderExperienceItem (props) {
    const item = props.item;

    const dateString = [item.startDate, item.endDate].map(function(strDate) {
        if (strDate === null) {
            return 'present';
        }

        const date = new Date(strDate);
        const monthes = [
            'Jan', 'Feb', 'Apr', 'Mar', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        return [monthes[date.getMonth()], date.getFullYear()].join(' ');
    }).join(' - ');

    const rowProcessing = function (str) {
        const listItems = {
            'CodeIgniter': '',
            'Yii2': '',
            'Yii': '',
            'Kohana': '',
            'Zend': '',

            'Dropwizard': '',
            'Android SDK': '',
            'Spring': '',

            'jQuery': '',
            'LMD': '',
            'AngularJS': '',
            'Grunt': '',
            'Backbone': '',

            'Django': '',

            'Jenkins': '',
            'Docker': '',
            'nginx': '',

            'Redmine': '',
            'Phing': '',
            'Gitosis': '',

            'PostgreSQL': '',
            'SQLite': '',
            'MSSQL': '',
            'MySQL': '',

            'Javascript': '',
            'NodeJS': '',
            'Python': '',
            'PHP': '',
            'Java': ''
        };

        for (let item in listItems) {
            let value = listItems[item];
            str = reactStringReplace(str, item, (match) => (
                <mark data-toggle="tooltip" title={value}>{match}</mark>
            ));
        }

        return str;
    };

    return (
        <article>
            <CompanyBadge data={item} />
            <span className="pull-right label label-default">{dateString}</span>

            <h4>{item.location.length > 0 && item.location.join(' / ')}</h4>

            <ul>
                {item.responsibilities.map((row, index) =>
                    <li key={index}>{rowProcessing(row)}</li>
                )}
            </ul>
        </article>
    );
}

export default function RenderExperience (props) {
    const responsibilities = _.sortBy(
        props.data.content,
        (item) => (new Date(item.startDate).getTime())
    ).reverse();

    return (
        <section>
            {responsibilities.map(item =>
                <RenderExperienceItem key={item.startDate} item={item} />
            )}
        </section>
    );
}

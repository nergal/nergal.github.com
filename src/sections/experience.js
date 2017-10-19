import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import reactStringReplace from 'react-string-replace';
import {Popover, OverlayTrigger, Badge} from 'react-bootstrap';

function VendorBadge (props) {
    if ( ! props.name) return null;
    if (props.url) return (<span className="vendor">(at <a target="_blank" href={props.url}>{props.name}</a>)</span>);
    return <span className="vendor">(at {props.name})</span>;
}

function CompanyBadge (props) {
    const item = props.data;
    const companyString = (
        <span>
            <span className="text-capitalize">{item.companyType}</span> {item.company && ` "${item.company}"`}
        </span>
    );

    return (
        <h3>
            {item.companyUrl
                ? <a target="_blank" href={item.companyUrl}>{companyString}</a>
                : companyString}
            <VendorBadge name={item.vendor} url={item.vendorUrl} />
            <small className="text-capitalize"> {item.title}</small>
        </h3>
    );
}

class RenderExperienceItem extends React.Component {
    formatDate(monthes) {
        return function (strDate) {
            if (strDate === null) {
                return 'present';
            }

            const date = new Date(strDate);

            return [
                monthes[date.getMonth()],
                date.getFullYear()
            ].join(' ');
        };
    }

    rowProcessing(str) {
        const listItems = this.context.metadata.definitions;

        for (let item in listItems) {
            let value = listItems[item];
            const overlay = <Popover title={item} id={`tooltip-${item}`}>{value}</Popover>;

            str = reactStringReplace(str, item, (match, index) => (
                <OverlayTrigger placement="top" overlay={overlay} key={`${item}-${index}`}>
                    <mark>{match}</mark>
                </OverlayTrigger>
            ));
        }

        return str;
    }

    render() {
        const item = this.props.item;
        const monthes = this.context.metadata.monthes;
        const dateString = [
            item.startDate,
            item.endDate
        ].map(this.formatDate(monthes)).join(' - ');

        return (
            <article>
                <CompanyBadge data={item} />
                <Badge pullRight={true}>{dateString}</Badge>

                <h4>{item.location.length > 0 && item.location.join(' / ')}</h4>

                <ul>
                    {item.responsibilities.map((row, index) =>
                        <li key={index}>{this.rowProcessing(row)}</li>
                    )}
                </ul>
            </article>
        );
    }
}

RenderExperienceItem.contextTypes = {
    metadata: PropTypes.object
};

export default function RenderExperience (props) {
    const responsibilities = _.sortBy(
        props.data.content,
        (item) => (new Date(item.startDate).getTime())
    ).reverse();

    return (
        <section>
            {responsibilities.map((item, index) =>
                <RenderExperienceItem key={index} item={item} />
            )}
        </section>
    );
}

/*jshint esversion: 6 */

import renderGeneral from './sections/general.jsx';
import renderSidebar from './sections/sidebar.jsx';
import renderOverview from './sections/overview.jsx';
import renderAdditionally from './sections/additionally.jsx';
import renderExperience from './sections/experience.jsx';

function findRenderer (scheme) {
    let el = null;

    if (scheme === 'general') el = renderGeneral;
    else if (scheme === 'overview') el = renderOverview;
    else if (scheme === 'experience') el = renderExperience;
    else if (scheme === 'additionally') el = renderAdditionally;
    else if (scheme === 'sidebar') el = renderSidebar;

    return el;
}

function extractData (dataset, scheme) {
    const currentSection = dataset.filter(item => item.template == scheme);

    if (currentSection.length > 0) {
        return currentSection[0];
    }

    return {
        header: null,
        template: null,
        content: []
    };
};


export default function SectionFactory (props) {
    const data = extractData(props.dataset, props.scheme);
    const renderer = findRenderer(props.scheme);

    if (renderer) {
        return renderer({data: data});
    }

    return null;
}

import {Component, PropTypes} from 'react';
import {renderGeneral, renderSidebar, renderOverview, renderAdditionally, renderExperience} from './sections';

export default class SectionFactory extends Component {
    get renderers() {
        return {
            general: renderGeneral,
            overview: renderOverview,
            experience: renderExperience,
            additionally: renderAdditionally,
            sidebar: renderSidebar
        };
    }

    static get contextTypes() {
        return {
            metadata: PropTypes.object,
            dataset: PropTypes.array
        };
    }

    findRenderer(scheme) {
        let el = null;
        if (this.renderers.hasOwnProperty(scheme)) el = this.renderers[scheme];
        return el;
    }

    extractData(dataset, scheme) {
        let data = {
            header: null,
            template: null,
            content: []
        };

        const currentSection = dataset.filter(item => item.template == scheme);
        if (currentSection.length > 0) data = currentSection[0];
        return data;
    }

    render() {
        const data = this.extractData(
            this.context.dataset,
            this.props.scheme
        );

        const renderer = this.findRenderer(this.props.scheme);
        if (renderer) {
            return renderer({data: data});
        }

        return null;
    }
}

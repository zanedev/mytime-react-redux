import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { returnToHome } from '../actions/global'

class Services extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            variations:[]
        }
    }

    componentDidMount() {
        if(!this.props.services.length) {
            this.props.dispatch(returnToHome());
        }
    }

    serviceCategoryClick(service){
        if(service.variations.length) {
            this.setState({'variations': service.variations});
        }
    }

    serviceVariationClick(variation_id){
        console.log(variation_id);
    }

    render() {

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        if(!this.state.variations.length) {
            return (
                <div className="booking-container">
                    <h3>Please choose a Service</h3>
                    <ul className="results-list">
                        {this.props.services.map((service) => (
                            <li onClick={()=>this.serviceCategoryClick(service)} className="results-item" key={service.id}>
                                <span className="name">{service.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

        if(this.state.variations.length) {
            return (
                <div className="booking-container">
                    <h3>Please choose a Service</h3>
                    <ul className="results-list">
                        {this.state.variations.map((variation) => (
                            <li onClick={()=>this.serviceVariationClick(variation.id)} className="results-item" key={variation.id}>
                                <span className="left">
                                    <span className="name">{variation.name}</span>
                                </span>
                                <span className="right">
                                    <span className="price">Price?</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

    }
}

Services.propTypes = {
    services: PropTypes.array,
    hasErrored: PropTypes.bool,
    isLoading: PropTypes.bool
}

const mapStateToProps = state => ({
    services: state.get("services").get('servicesSuccess').toJS(),
    hasErrored: state.get("services").get('servicesError'),
    isLoading: state.get("services").get('servicesLoading'),
})

export default connect(mapStateToProps, null)(Services)
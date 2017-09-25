import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { locationsFetchData } from '../actions/locations'
import { servicesFetchData } from '../actions/services'

class Home extends React.Component {

    componentDidMount() {
        if(!this.props.locations || this.props.locations.length == 0) {
            this.props.fetchLocationData();
        }
    }

    locationClick(locationId){
        this.props.fetchServicesData(locationId);
    }

    render() {

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div className="booking-container">
                <h3>Please choose a Location</h3>
                <ul className="results-list">
                    {this.props.locations.map((location) => (
                        <li onClick={()=>this.locationClick(location.id)} className="results-item" key={location.id}>
                            <span className="left">
                                <span className="street1">{location.street_address}</span>
                                <span className="street2">{location.street_address_2}</span>
                            </span>
                            <span className="right">
                                <span className="city-state">{location.city}, {location.state}</span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

Home.propTypes = {
    locations: PropTypes.array,
    hasErrored: PropTypes.bool,
    isLoading: PropTypes.bool,
}

const mapStateToProps = state => ({
    locations: state.get("locations").get('locationsSuccess').toJS(),
    hasErrored: state.get("locations").get('locationsError'),
    isLoading: state.get("locations").get('locationsLoading'),
})

const mapDispatchToProps = dispatch => ({
    fetchLocationData: () => dispatch(locationsFetchData()),
    fetchServicesData: (locationId) => dispatch(servicesFetchData(locationId)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)


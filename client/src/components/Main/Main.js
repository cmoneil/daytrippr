import React, { Component } from "react";
import Moment from "moment";
import ItinList from "../ItinList";
import EventRestResultsList from "../EventRestResultsList"
import Footer from "../Footer"
import SearchForm from "../SearchForm";
import EventResults from "../EventResults";
import PlacesResults from "../PlacesResults";
import ParksResults from "../ParksResults";
import RestResults from "../RestResults";
import ResultsList from "../ResultsList"
import API from "../../Utils/API"
import MapContainer from "../MapContainer"
import NoResults from "../NoResults"
import Itinerary from "../Itinerary";
import Weather from "../Weather";
import axios from "axios";


// const moment = require("moment")

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: 0,
            location: "",
            lat: "",
            lng: "",
            timeToSpend: "",
            startTime: "",
            endTime: "",
            money: "",
            oauthID: "",
            collection: [],
            events: [],
            restaurants: [],
            places: [],
            parks: [],
            weather: [],
            saved: []
        };
    }

    componentWillMount() {
        this.setState({ oauthID: localStorage.getItem("oauthID") })
    }
    //Gets Itinerary data 
    componentDidMount() {
        this.getSaved()

    }
    //Gets User info
    getUser = () => {
        API.findUser()
            .then((res) => {
                this.setState({ user: res.data })
            })
            .catch(err => console.log(err))
    }
    //Returns Zip Code from search
    handleLocation = (event) => {
        this.setState({ location: event.target.value })
    }

    // Returns Time to spend from search
    handleTimeToSpend = (event) => {
        this.setState({ timeToSpend: event.target.value })
    }
    //Returns Money to spend from search
    handleMoney = (event) => {
        this.setState({ money: event.target.value })
    }
    //Handles form submit
    handleSubmit = (event) => {
        event.preventDefault();
        //Gets exact time and date of submit
        let now = Moment().format("YYYY-MM-DDTHH:mm");
        let end = Moment().add(this.state.timeToSpend, "h").format("YYYY-MM-DDTHH:mm");
        this.setState({
            startTime: Moment().format("YYYY-MM-DDTHH:mm"),
            endTime: Moment().add(this.state.timeToSpend, "h").format("YYYY-MM-DDTHH:mm")
        });
        //Sends form Data to search api
        axios.post("/api/search/form-data", {
            location: this.state.location,
            startTime: now,
            endTime: end,
            money: this.state.money
        })
            .then((response) => {
                response.data.collection[1].map(events => {
                    return events.name = events.title
                });
                this.setState({
                    collection: response.data.collection,
                    lat: response.data.lat,
                    lng: response.data.lng,
                    restaurants: response.data.collection[0],
                    events: response.data.collection[1],
                    places: response.data.collection[2],
                    parks: response.data.collection[3],
                    weather: response.data.collection[4]
                });
                response.data.collection[1].map(events => {
                    return events.name = events.title

                })
            })
            .catch(error => {
                console.log(error);
            })


    }

    //Handles save items to itinerary
    handleSaveButton = (object) => {
        API.saveItinerary({
            id: object.id,
            name: object.name,
            url: object.url,
            oauthID: this.state.oauthID,
            lat: object.lat,
            lng: object.lng
        })
            .then(this.getSaved)


    }

    //Handles URL for any places
    handleUrl = (object) => {
        axios.post("/api/search/url-data", {
            id: object.id,
            location: this.state.location
        })
            .catch(error => {
                console.log(error)
            })
    }
    //Gets saved itinerary items from MongoDB
    getSaved = () => {
        API.getItinerary(this.state.oauthID)
            .then((res) => {
                this.setState({ saved: res.data })
            })
            .catch(err => console.log(err))


    }

    //Handles deleting items from itinerary
    handleDeleteButton = (id) => {
        API.deleteItinerary(id)
            .then(this.getSaved);

    }




    render() {

        return (
            <div >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <MapContainer
                                handleUrl={this.handleUrl}
                                userLocation={this.state.location}
                                restaurants={this.state.restaurants}
                                places={this.state.places}
                                parks={this.state.parks}
                                events={this.state.events}
                                itin={this.state.saved}
                                center={{ lat: this.state.lat, lng: this.state.lng }} />
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <SearchForm
                                handleSubmit={this.handleSubmit}
                                handleLocation={this.handleLocation}
                                handleTimeToSpend={this.handleTimeToSpend}
                                handleMoney={this.handleMoney}
                            />
                            <Weather
                                temperature={this.state.weather.temperature}
                                summary={this.state.weather.summary}
                                precipitation={this.state.weather.precipProbability}
                            />
                            <Itinerary>
                                {this.state.saved.map(saved => {
                                    return (
                                        <ItinList
                                            _id={saved._id}
                                            key={saved._id}
                                            title={saved.name}
                                            url={saved.url}
                                            handleDeleteButton={this.handleDeleteButton}
                                        />
                                    )
                                })
                                }
                            </Itinerary>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row" style={{
                        paddingBottom: 40,
                        paddingTop: 20
                    }}>
                        <EventResults>
                            {!this.state.events.length ? <NoResults /> :
                                this.state.events.map(events => {
                                    return (
                                        <EventRestResultsList
                                            _id={events.id}
                                            key={events.id}
                                            title={events.name}
                                            url={events.url}
                                            handleSaveButton={() => this.handleSaveButton({ id: events.id, name: events.name, url: events.url, lat: events.venue.location.lat, lng: events.venue.location.lon })}
                                            getSaved={this.getSaved}
                                        />
                                    )
                                })}
                        </EventResults>
                        <PlacesResults>
                            {!this.state.events.length ? <NoResults /> :
                                this.state.places.map(places => {
                                    return (
                                        <ResultsList
                                            _id={places.id}
                                            key={places.id}
                                            title={places.name}
                                            handleUrl={() =>
                                                this.handleUrl({ id: places.place_id })}
                                            handleSaveButton={() => this.handleSaveButton({ id: places.id, name: places.name, url: places.url, lat: places.geometry.location.lat, lng: places.geometry.location.lng })}
                                            getSaved={this.getSaved}
                                        />
                                    )
                                })}
                        </PlacesResults>
                        <ParksResults>
                            {!this.state.parks.length ? <NoResults /> :
                                this.state.parks.map(parks => {
                                    return (
                                        <ResultsList
                                            _id={parks.id}
                                            key={parks.id}
                                            title={parks.name}
                                            handleUrl={() =>
                                                this.handleUrl({ id: parks.place_id })}
                                            handleSaveButton={() => this.handleSaveButton({ id: parks.id, name: parks.name, url: parks.url, lat: parks.geometry.location.lat, lng: parks.geometry.location.lng })}
                                            getSaved={this.getSaved}
                                        />
                                    )
                                })}
                        </ParksResults>
                        <RestResults>
                            {!this.state.restaurants.length ? <NoResults /> :
                                this.state.restaurants.map(restaurants => {
                                    return (
                                        <EventRestResultsList
                                            _id={restaurants.id}
                                            key={restaurants.id}
                                            title={restaurants.name}
                                            url={restaurants.url}
                                            handleSaveButton={() => this.handleSaveButton({ id: restaurants.id, name: restaurants.name, url: restaurants.url, lat: restaurants.coordinates.latitude, lng: restaurants.coordinates.longitude })}
                                            getSaved={this.getSaved}
                                        />
                                    )
                                })}
                        </RestResults>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}
export default Main;

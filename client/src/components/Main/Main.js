import React, { Component } from "react";
import Moment from "moment";
import ItinList from "../ItinList";
import SearchForm from "../SearchForm";
import EventResults from "../EventResults";
import PlacesResults from "../PlacesResults";
import RestResults from "../RestResults";
import ResultsList from "../ResultsList"
import API from "../../Utils/API"
import Header from "../Header";
import MapContainer from "../MapContainer"
import Itinerary from "../Itinerary";
import axios from "axios";
// const moment = require("moment")

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: "",
            lat: "",
            lng: "",
            timeToSpend: "",
            startTime: "",
            endTime: "",
            money: "",
            collection: [],
            events: [],
            restaurants: [],
            places: [],
            saved: []
        };
    }

    componentDidMount() {
        this.getSaved()
    }


    handleLocation = (event) => {
        console.log(event.target.value)
        this.setState({ location: event.target.value })
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("click")
    }

    handleTimeToSpend = (event) => {
        console.log(event.target.value)
        this.setState({ timeToSpend: event.target.value })
    }

    handleMoney = (event) => {
        console.log(event.target.value)
        this.setState({ money: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let now = Moment().format("YYYY-MM-DDTHH:mm");
        let end = Moment().add(this.state.timeToSpend, "h").format("YYYY-MM-DDTHH:mm");
        console.log(now)
        this.setState({
            startTime: Moment().format("YYYY-MM-DDTHH:mm"),
            endTime: Moment().add(this.state.timeToSpend, "h").format("YYYY-MM-DDTHH:mm")
        });

        axios.post("/api/search/form-data",{
            location: this.state.location,
            startTime: now,
            endTime: end,
            money: this.state.money
        })
        .then((response) => {
            console.log(response.data)
            console.log(response.data.lng)
            // console.log("yelp", response.data.collection[0]);
            // console.log("seat", response.data.collection[1]);
            console.log("places", response.data.collection[2]);
            response.data.collection[1].map(events=>{
                events.name = events.title
            })
            this.setState({
                collection: response.data.collection,
                lat: response.data.lat,
                lng: response.data.lng,
                restaurants: response.data.collection[0],
                events: response.data.collection[1],
                places: response.data.collection[2]
            });
            response.data.collection[1].map(events=>{
                events.name = events.title
                // console.log(events.id)
                // console.log(events.title)
                // console.log(events.url)

            })
            console.log(this.state.lat)
            
        }) .catch(function (error) {
            console.log(error);
        })
        
        console.log("click")
    }


    handleSaveButton = (object) => {
        API.saveItinerary(object)
           .then(this.getSaved)
    }

    getSaved = () => {
        API.getItinerary()
            .then((res) => {
                console.log(res.data)
                this.setState({ saved: res.data })
            })
            .catch(err => console.log(err))

    }

    handleDeleteButton = (id) => {
        console.log("delete: ", id)
        API.deleteItinerary(id)
            .then(this.getSaved);

    }




    render() {

        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <MapContainer
                            restaurants ={this.state.restaurants}
                            places={this.state.places} 
                            events={this.state.events}
                            location={{lat: this.state.lat, lng: this.state.lng}}/>
                        </div>
                        <div className="col-4">
                            <SearchForm
                                handleSubmit={this.handleSubmit}
                                handleLocation={this.handleLocation}
                                handleTimeToSpend={this.handleTimeToSpend}
                                handleMoney={this.handleMoney}
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
                                 })} 
                             </Itinerary>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <EventResults>
                            {this.state.events.map(events => {!events|| "No Events"
                                return (
                                    <ResultsList
                                        _id={events.id}
                                        key={events.id}
                                        title={events.name}
                                        url={events.url}
                                        handleSaveButton={() => this.handleSaveButton(events)}
                                        getSaved={this.getSaved}
                                    />
                                )
                            })}
                        </EventResults>
                        <PlacesResults>
                            {this.state.places.map(places => {
                                return (
                                    <ResultsList
                                        _id={places.id}
                                        key={places.id}
                                        title={places.name}
                                        url={places.url}
                                        handleSaveButton={() => this.handleSaveButton(places)}
                                        getSaved={this.getSaved}
                                    />
                                )
                            })}
                        </PlacesResults>
                        <RestResults>
                            {this.state.restaurants.map(restaurants => {
                                return (
                                    <ResultsList
                                        _id={restaurants.id}
                                        key={restaurants.id}
                                        title={restaurants.name}
                                        url={restaurants.url}
                                        handleSaveButton={() => this.handleSaveButton(restaurants)}
                                        getSaved={this.getSaved}
                                    />
                                )
                            })}
                        </RestResults>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;
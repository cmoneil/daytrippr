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
import Map from "../Map"
import Itinerary from "../Itinerary";
// const moment = require("moment")

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: "",
            timeToSpend: "",
            startTime: "",
            endTime: "",
            money: "",
            events: [],
            restaurants: [],
            places: [],
            saved: []
        };
    }

    componentDidMount() {
        this.getSaved()
    }

    handleLocation= ( event ) =>{
        console.log(event.target.value)
        this.setState({location: event.target.value})
    }
    handleFormSubmit = ( event ) => {
        event.preventDefault();
        console.log("click")
    }

    handleTimeToSpend = ( event ) =>{
        console.log(event.target.value)
        this.setState({timeToSpend: event.target.value})
    }

    handleMoney = ( event ) =>{
        console.log(event.target.value)     
        this.setState({money: event.target.value})
    }
    handleSubmit = ( event ) => {
        event.preventDefault();
        console.log(Moment())
        let now = Moment().format("YYYY-MM-DDTHH:mm");
        let end = Moment().add(this.state.timeToSpend, "h").format("YYYY-MM-DDTHH:mm");
        this.setState({
            startTime: Moment().format("YYYY-MM-DDTHH:mm"),
            endTime: Moment().add(this.state.timeToSpend, "h").format("YYYY-MM-DDTHH:mm")
        });
        console.log(this.state.timeToSpend);
        console.log(now)
        console.log(end)
        API.getSeatgeek(this.state.location, now ,end)
        .then((res) => {
        this.setState({ events: res.data.events});
        console.log(this.state.events)
        
        }
    )
      .catch(err => console.log(err));
       
        
        console.log("click")
    }

    handleSaveButton = ( id ) => {
        const article = this.state.articles.find(article => article._id === id)
        console.log("article: ", article)
        API.saveArticle(article)
        .then(this.getSaved)
    }

    getSaved = () => {
        API.getArticle()
        .then((res)=> {
        console.log(res.data)
        this.setState({saved: res.data})
        })
        .catch(err => console.log(err))

    }

    handleDeleteButton = ( id ) => {
        console.log("delete: ", id )
        API.deleteArticle(id)
        .then(this.getSaved);

    }

    
    

render (){

    return(
        <div>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                <Map/>
                <div className="col-4">
                <SearchForm
                   handleSubmit={this.handleSubmit}
                   handleLocation={this.handleLocation}
                   handleTimeToSpend={this.handleTimeToSpend}
                   handleMoney={this.handleMoney}
                  />
                 <Itinerary>
                        {/* {this.state.saved.map(saved => {
                        return (<ItinList
                        _id={saved._id}
                        key={saved._id}
                        title={saved.title}
                        date={saved.date}
                        url={saved.url}
                        snippet={saved.snippet} */}
                        {/* handleDeleteButton={this.handleDeleteButton} */}
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
                {this.state.events.map(events => {
                    return (
                    <ResultsList
                    _id={events._id}
                    key={events._id}
                    title={events.title}
                    url={events.url}
                    handleSaveButton={this.handleSaveButton}
                    getSaved={this.getSaved}
                     />
                    )
                    })}
                </EventResults>
                <PlacesResults>
                </PlacesResults>
                <RestResults>
                </RestResults>
            </div>
        </div>
    </div>
    )
}
} 
export default Main;
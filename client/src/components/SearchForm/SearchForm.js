import React from "react";

const SearchForm = props => (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="search">Plan your adventure</label>
        <div className="form-group">
          <input
              onChange={props.handleLocation}
              value={props.location}
              name="location"
              type="text"
              className="form-control"
              placeholder="Where are you?"
              id="search"
            />
        </div>
        <div className="form-group">
          <input
              onChange={props.handleTimeToSpend}
              value={props.timeToSpend}
              name="timeToSpend"
              type="text"
              className="form-control"
              placeholder="How much time do you have?"
              id="search"
          />
        </div>
        <div className="form-group">
          <input
                onChange={props.handleMoney}
                value={props.money}
                name="money"
                type="text"
                className="form-control"
                placeholder="How much do you want to spend?"
                id="search"
               />
        </div>
        <button
              className="btn btn-primary"
              type="submit">Search
        </button>
    </form>
  
      

);

export default SearchForm;

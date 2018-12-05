import React from "react";
import PropTypes from "prop-types"

const SearchForm = props => (
    <form style={{backgroundColor: `rgba(255,255,255,0.5)`}} onSubmit={props.handleSubmit}>
      <label htmlFor="search"><h2 style={{paddingTop: 10}}>Plan your adventure</h2></label>
        <div className="form-group">
          <input
              onChange={props.handleLocation}
              value={props.location}
              name="location"
              type="number"
              className="form-control"
              placeholder="Where are you?"
              id="search"
              required
              pattern="[0-9]{5}"

            />
        </div>
        <div className="form-group">
          <input
              onChange={props.handleTimeToSpend}
              value={props.timeToSpend}
              name="timeToSpend"
              type="number"
              className="form-control"
              placeholder="How much time do you have?"
              id="search"
              required
              min="4"
              max="12"
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

SearchForm.propTypes = {
  handleLocation: PropTypes.func,
  handleMoney: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleTimeToSpend: PropTypes.func,
  location: PropTypes.node,
  money: PropTypes.node,
  timeToSpend: PropTypes.node
}


export default SearchForm;

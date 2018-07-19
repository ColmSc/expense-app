import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocussed: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }
    render() {
        return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                <input 
                    type="text" 
                    placeholder="Search Expenses"
                    className="text-input"
                    value={this.props.filters.text} 
                    onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                     }} 
                />
                </div>
        <div className="input-group__item">
        <select 
        value={this.props.filters.sortBy} 
        className="select"
        onChange={(e) => {
        e.target.value == "date" ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount())
    }} >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
    </select></div>
        <div className="input-group__item"><DateRangePicker
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
        /></div>
        </div>
        
        
        
    </div>
    );
    }

}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);
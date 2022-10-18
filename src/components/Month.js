import React, { useState } from "react";
import {
    startOfMonth,
    startOfWeek,
    endOfMonth,
    endOfWeek,
    startOfDay,
    addDays,
    format,
    isSameDay,
    isSameMonth,
    addMonths,
    subMonths,
    parse
} from 'date-fns';
import "../App.css";
import { Link } from "react-router-dom";


class Month extends React.Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date(),
        events: []
    };

    renderHeader() {
        const dateFormat = "MMMM yyyy";

        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevMonth}>
                        chevron_left
                    </div>
                    <div className="icon" onClick={this.nextMonth}>chevron_right</div>
                    <span>{format(this.state.currentMonth, dateFormat)}</span>

                </div>
                {/* <div className="col col-center">
                </div> */}
                <div className="col col-end" >
                    <button type="button" className="btn btn-light"><Link className="link" to={`/`}>day</Link></button>
                    <button type="button" className="btn btn-light"><Link className="link" to={`/week`}>week</Link></button>
                    <button type="button" className="btn btn-light"><Link className="link" to={`/month`}>month</Link></button>
                </div>
            </div>
        );
    }

    renderDays() {
        const dateFormat = "dd";
        const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

        let startDate = startOfWeek(this.state.currentMonth);

        return (
            <div className="row">
                {days.map((day, i) => (
                    <div key={i} className="col weekName text-center">{day}</div>
                ))}
            </div>
        )
    }

    renderCells() {
        const { currentMonth, selectedDate , events} = this.state;
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const dateFormat = "d";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                const cloneDay = day;
                console.log(cloneDay, "clone../..........")
              
                // const arr =[{event : "lunch" , id : cloneDay} , {event : "dinner" , id : cloneDay}]
                days.push(
                    <div
                        className={`col cell ${!isSameMonth(day, monthStart)
                            ? "disabled"
                            : isSameDay(day, selectedDate) ? "selected" : ""
                            }`}
                        key={day}
                        onClick={() => this.onDateClick(cloneDay)}
                    >
                        <span className="number">{formattedDate}</span>

                        <span className="bg">{formattedDate}</span>
                    </div>
                );

                day = addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];

            // console.log(days, "dayssss")
        }
        return <div className="body">{rows}</div>;
    };

    renderEvents() {
        const { currentMonth, selectedDate, events } = this.state;

        return <div>{
            events.map((event, id) => (
                <h1 key={id}>{event.event}</h1>
            ))
            }</div>
    }

    onDateClick = day => {
        const { currentMonth, selectedDate, events } = this.state;

        console.log(day, "day")
        let event = prompt("enter your event")
        console.log(day, "date", event)
        this.setState({
            events: ([...events, { event: event, id: day }])
        })
        console.log(this.state.events , "state")
    };

    nextMonth = () => {
        this.setState({
            currentMonth: addMonths(this.state.currentMonth, 1)
        });
    };

    prevMonth = () => {
        this.setState({
            currentMonth: subMonths(this.state.currentMonth, 1)
        });
    };

    render() {
        return (
            <div className="container calendar">
                {this.renderHeader()}
                {this.renderDays()}
                <hr />
                {this.renderCells()}
                {this.renderEvents()}

            </div>
        );
    }
}

export default Month;
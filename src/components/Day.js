import React from "react";
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
    parse,
    subDays
} from 'date-fns';
import "../App.css";
import { Link } from "react-router-dom";


class Day extends React.Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };

    renderHeader() {
        const dateFormat = "dd MMMM yyyy";

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
                    <button type="button" className="btn btn-light"><Link className="link"  to={`/week`}>week</Link></button>
                    <button type="button" className="btn btn-light"><Link className="link"  to={`/month`}>month</Link></button>
                </div>
            </div>
        );
    }

    // renderDays() {
    //     const dateFormat = "ddd";
    //     const days = [];

    //     let startDate = startOfWeek(this.state.currentMonth);

    //     for (let i = 0; i < 7; i++) {
    //         days.push(
    //             <div className="col col-center" key={i}>
    //                 {format(addDays(startDate, i), dateFormat)}
    //             </div>
    //         );
    //     }

    //     return <div className="days row">{days}</div>;
    // }

    // renderCells() {
    //     const { currentMonth, selectedDate } = this.state;
    //     const monthStart = startOfMonth(currentMonth);
    //     const monthEnd = endOfMonth(monthStart);
    //     const startDate = startOfWeek(monthStart);
    //     const endDate = endOfWeek(monthEnd);

    //     const dateFormat = "d";
    //     const rows = [];

    //     let days = [];
    //     let day = startDate;
    //     let formattedDate = "";

    //     while (day <= endDate) {
    //         for (let i = 0; i < 7; i++) {
    //             formattedDate = format(day, dateFormat);
    //             const cloneDay = day;
    //             days.push(
    //                 <div
    //                     className={`col cell ${!isSameMonth(day, monthStart)
    //                             ? "disabled"
    //                             : isSameDay(day, selectedDate) ? "selected" : ""
    //                         }`}
    //                     key={day}
    //                     onClick={() => this.onDateClick(parse(cloneDay))}
    //                 >
    //                     <span className="number">{formattedDate}</span>
    //                     <span className="bg">{formattedDate}</span>
    //                 </div>
    //             );
    //             day = addDays(day, 1);
    //         }
    //         rows.push(
    //             <div className="row" key={day}>
    //                 {days}
    //             </div>
    //         );
    //         days = [];
    //     }
    //     return <div className="body">{rows}</div>;
    // }

    // onDateClick = day => {
    //     this.setState({
    //         selectedDate: day
    //     });
    // };
renderTime(){
    const timeArr = ["9 : 00 AM",
    "9 : 30 AM","10 : 00 AM","10 : 30 AM","11 : 00 AM",
    "11 : 30 AM","12 : 00 PM","12 : 30 PM","1 : 00 PM","1 : 30 PM",
    "2 : 00 PM","2 : 30 PM","3 : 30 PM","4 : 00 PM","4 : 30 PM", "5 : 00 PM"];
    
    return (
        <div className="container">
        <div className="col">
            {timeArr.map((time , i)=>(
                <div key={i} className="days">{time}</div>
            ))}
        </div>
        </div>
    )
}
    nextMonth = () => {
        this.setState({
            currentMonth: addDays(this.state.currentMonth, 1)
        });
    };

    prevMonth = () => {
        this.setState({
            currentMonth: subDays(this.state.currentMonth, 1)
        });
    };

    render() {
        return (
            <div className="container calendar">
                {this.renderHeader()}
                {this.renderTime()}
                {/* {this.renderDays()}
        {this.renderCells()} */}

            </div>
        );
    }
}

export default Day;
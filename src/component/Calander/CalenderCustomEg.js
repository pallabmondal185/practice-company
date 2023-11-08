import React from 'react';
import "./calender.css"
import { useState } from 'react';
import { useEffect } from 'react';

const CalenderCustomEg = () => {
    // const daysTag = document.querySelector(".days"),
    //     currentDate = document.querySelector(".current-date"),
    //     prevNextIcon = document.querySelectorAll(".icons span");

    // // getting new date, current year and month
    // let date = new Date(),
    //     currYear = date.getFullYear(),
    //     currMonth = date.getMonth();

    // // storing full name of all months in array
    // const months = ["January", "February", "March", "April", "May", "June", "July",
    //     "August", "September", "October", "November", "December"];

    // const renderCalendar = () => {
    //     let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    //         lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    //         lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    //         lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    //     let liTag = "";

    //     for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
    //         liTag += `<li className="inactive">${lastDateofLastMonth - i + 1}</li>`;
    //     }

    //     for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
    //         // adding active class to li if the current day, month, and year matched
    //         let isToday = i === date.getDate() && currMonth === new Date().getMonth()
    //             && currYear === new Date().getFullYear() ? "active" : "";
    //         liTag += `<li className="${isToday}">${i}</li>`;
    //     }

    //     for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
    //         liTag += `<li className="inactive">${i - lastDayofMonth + 1}</li>`
    //     }
    //     currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    //     daysTag.innerHTML = liTag;
    // }
    // renderCalendar();

    // prevNextIcon.forEach(icon => { // getting prev and next icons
    //     icon.addEventListener("click", () => { // adding click event on both icons
    //         // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    //         currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    //         if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
    //             // creating a new date of current year & month and pass it as date value
    //             date = new Date(currYear, currMonth, new Date().getDate());
    //             currYear = date.getFullYear(); // updating current year with new date year
    //             currMonth = date.getMonth(); // updating current month with new date month
    //         } else {
    //             date = new Date(); // pass the current date as date value
    //         }
    //         renderCalendar(); // calling renderCalendar function
    //     });
    // });


    // *********react*************

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const today = new Date();

    const [days, setDays] = useState([]);
    const [currDate, setCurrentDate] = useState();
    const [currMonth, setCurrMonth] = useState(today.getMonth());
    const [currYear, setCurrYear] = useState(today.getFullYear());
    const [selectedDate, setSelectedDay] = useState(today);

    console.log("selectedDaterrr", selectedDate)

    // getting all days
    const getAllDaysOfMonth = () => {
        const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
        const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
        const lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
        const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

        console.log("lastDateOfMonth", lastDateOfMonth)

        let dateArr = []
        //  creating li of previous month last days
        for (let i = firstDayOfMonth; i > 0; i--) {
            dateArr = [
                ...dateArr,
                {
                    day: lastDateOfLastMonth - i + 1,
                    month: currMonth - 1,
                    year: currYear,
                    clName: "inactive"
                }
            ]
        }

        // creating li of all days of current month
        for (let i = 1; i <= lastDateOfMonth; i++) {
            // adding active class to li if the current day, month, and year matched
            const isTodayClass = i === today.getDate() && currMonth === today.getMonth()
                && currYear === today.getFullYear() ? "active" : "";

            dateArr = [
                ...dateArr,
                {
                    day: i,
                    month: currMonth,
                    year: currYear,
                    clName: isTodayClass
                }
            ]
        }

        // passing current mon and yr as currentDate text
        for (let i = lastDayOfMonth; i < 6; i++) {
            dateArr = [
                ...dateArr,
                {
                    day: i - lastDayOfMonth + 1,
                    month: currMonth + 1,
                    year: currYear,
                    clName: "inactive"
                }
            ]
        }
        setDays(dateArr);
    }

    //click on left
    const handleLeft = () => {
        const newCurrMonth = currMonth - 1;
        if (newCurrMonth >= 0) {
            setCurrMonth(newCurrMonth);
        } else {
            setCurrMonth(11);
            setCurrYear(prev => prev - 1);
        }
    }

    //click on right
    const handleRight = () => {
        const newCurrMonth = currMonth + 1;
        if (newCurrMonth <= 11) {
            setCurrMonth(newCurrMonth);
        } else {
            setCurrMonth(0);
            setCurrYear(prev => prev + 1);
        }
    }

    // to select the date on click
    const handleDateClick = (data) => {
        const { day, month, year } = data;
        const date = new Date(year, month, day);
        console.log("yeardff", year, month, day)
        setSelectedDay(date);
    }

    useEffect(() => {
        getAllDaysOfMonth();
    }, [currMonth])

    return (
        <div>
            <div className="wrapper">
                <header>
                    <p className="current-date">
                        <span>Month: {currMonth + 1}, Year: {currYear}</span>
                    </p>
                    <div className="icons">
                        <span id="prev" className="material-symbols-rounded" onClick={handleLeft}>{`<`}</span>
                        <span id="next" className="material-symbols-rounded" onClick={handleRight}>{`>`}</span>
                    </div>
                </header>

                <div>
                    <label>Month:</label>
                    <select
                        value={currMonth}
                        onChange={(e) => setCurrMonth(Number(e.target.value))}
                    >
                        {months.map((item, i) => {
                            return (
                                <option key={i} value={i}>{item}</option>
                            )
                        })
                        }
                    </select>
                </div>

                {/* shows the selected day */}
                <div>{`${selectedDate.getDate()}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear()}`}</div>


                {/* weeks */}
                <div className="calendar">
                    <ul className="weeks">
                        <li>Sun</li>
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                    </ul>

                    {/* days */}
                    <ul className="days">
                        {
                            days.map((item, i) => {
                                const { day, month, year } = item;
                                const isSelectedClass = day === selectedDate.getDate()
                                    && month === selectedDate.getMonth()
                                    && year === selectedDate.getFullYear() ? "selected" : "";

                                // const isSelectedClass = day === selectedDate.getDate()
                                //     && month === selectedDate.getMonth()
                                //     && year === selectedDate.getFullYear();
                                console.log("isSelectedClass", selectedDate.getMonth(), month)

                                return (
                                    <li
                                        key={i}
                                        className={item?.clName + " " + isSelectedClass}
                                        onClick={() => handleDateClick(item)}
                                    >
                                        {item?.day}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CalenderCustomEg;

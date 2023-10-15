import React, { useEffect, useState } from 'react';
import './calender.css'

const CalanderEg = () => {
    // *****************react**************
    const [daysData, setDaysData] = useState([]);
    console.log("vvdfds")

    const daysTag = document.querySelector(".days"),
        currentDate = document.querySelector(".current-date"),
        prevNextIcon = document.querySelectorAll(".icons span");

    // getting new date, current year and month
    let date = new Date();
    // currYear = date.getFullYear(),
    // currMonth = date.getMonth();
    const [currYear, setCurrentYear] = useState(date.getFullYear());
    const [currMonth, setCurrentMonth] = useState(date.getMonth());

    console.log("currMonth", currMonth)
    console.log("currYear", currYear)

    console.log("NewDate", new Date("2023", "2", "0").getDate())

    // storing full name of all months in array
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    const renderCalendar = () => {
        let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
            lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
            lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
            lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
        let liTag = "";
        console.log("firstDayofMonth", firstDayofMonth)
        console.log("lastDateofMonth", lastDateofMonth)
        console.log("lastDayofMonth", lastDayofMonth)
        console.log("lastDateofLastMonth", lastDateofLastMonth)

        for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
            liTag += `<li className="inactive">${lastDateofLastMonth - i + 1}</li>`;
        }

        for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
            // adding active class to li if the current day, month, and year matched
            let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                && currYear === new Date().getFullYear() ? "active" : "";
            liTag += `<li className="${isToday}">${i}</li>`;
        }

        for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
            liTag += `<li className="inactive">${i - lastDayofMonth + 1}</li>`
        }
        // currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
        // daysTag.innerHTML = liTag;
        setDaysData(liTag)
    }
    useEffect(() => {
        renderCalendar();
    }, [currMonth, currYear])

    prevNextIcon.forEach(icon => { // getting prev and next icons
        icon.addEventListener("click", () => { // adding click event on both icons
            // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
            let currMonthNew = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
            if (currMonthNew < 0 || currMonthNew > 11) { // if current month is less than 0 or greater than 11
                // creating a new date of current year & month and pass it as date value
                const dateNew = new Date(currYear, currMonthNew, new Date().getDate());
                // currYear = date.getFullYear(); // updating current year with new date year
                // currMonth = date.getMonth(); // updating current month with new date month
                setCurrentMonth(dateNew.getMonth());
                setCurrentYear(dateNew.getFullYear());
            } else {
                const dateNew = new Date(); // pass the current date as date value
                console.log("dateNew", dateNew)
                setCurrentMonth(currMonthNew);
                // setCurrentYear(dateNew.getFullYear());
            }
            // renderCalendar(); // calling renderCalendar function
        });
    });


    //******** react codes ************//


    const handlePrev = () => {

    }

    const handleNext = () => {

    }

    return (
        <div className='calender-body'>
            <div className="wrapper">
                <header>
                    <p className="current-date">{`${months[currMonth]} ${currYear}`}</p>
                    <div className="icons">
                        <span id="prev" className="material-symbols-rounded" >{'<'}</span>
                        <span id="next" className="material-symbols-rounded">{'>'}</span>
                    </div>
                </header>
                <div className="calendar">

                    {/* weeks */}
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
                    <ul className="days" dangerouslySetInnerHTML={{ __html: daysData }}>
                        <li className="inactive">

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CalanderEg

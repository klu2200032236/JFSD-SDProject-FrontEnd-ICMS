
import React, { Component } from 'react';

class HolidaysCalendar extends Component {
    render() {
        const calendarStyle = {
            border: "0",
            width: "100%",
            height: "800px" // Increase height to 800px
        };

        return (
            <div className="festival-calendar">
                {/* Integrated Google Calendar with Indian Festivals */}
                <iframe 
                    src="https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata" 
                    style={calendarStyle}
                    frameborder="0"
                    scrolling="no"
                    title="Indian Festival Calendar"
                ></iframe>
            </div>
        );
    }
}

export default HolidaysCalendar;





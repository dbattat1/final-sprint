import React, { Component } from 'react'
import 'date-fns' 
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

export default class EventCalendar extends React.Component {
    state = {
        date: new Date()
    }
    
    onChange = (ev) => {
        console.log('log', ev);
        
    }
    
    render() {
        return (
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                 {/* <MuiPickersUtilsProvider >  */}
                    <DatePicker
                        autoOk
                        orientation="landscape"
                        variant="static"
                        openTo="date"
                        // value={this.state.date}
                        onChange={this.onChange}
                    /> 
                     </MuiPickersUtilsProvider> 
            </div>
        )

    }
}
 